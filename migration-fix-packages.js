// migration-fix-packages.js
// Run this ONCE to fix existing projects that show "Package: undefined"
// Usage: node migration-fix-packages.js

import { db } from './backend/firebaseAdmin.js';

async function fixExistingProjects() {
    console.log('🔧 Starting package field migration...');

    try {
        const projectsRef = db.collection('projects');
        const snapshot = await projectsRef.get();

        if (snapshot.empty) {
            console.log('ℹ️  No projects found in database');
            return;
        }

        console.log(`📊 Found ${snapshot.size} total projects`);

        let fixed = 0;
        let alreadyCorrect = 0;
        let errors = 0;

        for (const doc of snapshot.docs) {
            const data = doc.data();
            const projectId = doc.id;

            try {
                // Case 1: Has "package" but missing "packageType"
                if (data.package && !data.packageType) {
                    await doc.ref.update({
                        packageType: data.package
                    });
                    console.log(`✅ Fixed ${projectId}: Added packageType = "${data.package}"`);
                    fixed++;
                }
                // Case 2: Has "packageType" but missing "package"
                else if (data.packageType && !data.package) {
                    await doc.ref.update({
                        package: data.packageType
                    });
                    console.log(`✅ Fixed ${projectId}: Added package = "${data.packageType}"`);
                    fixed++;
                }
                // Case 3: Has both fields already
                else if (data.package && data.packageType) {
                    console.log(`✓ ${projectId}: Already has both fields`);
                    alreadyCorrect++;
                }
                // Case 4: Missing both fields (shouldn't happen but handle it)
                else {
                    console.warn(`⚠️  ${projectId}: Missing both package fields - manual fix needed`);
                    errors++;
                }
            } catch (err) {
                console.error(`❌ Error updating ${projectId}:`, err.message);
                errors++;
            }
        }

        console.log('\n================================================================================');
        console.log('📊 MIGRATION SUMMARY');
        console.log('================================================================================');
        console.log(`Total projects: ${snapshot.size}`);
        console.log(`✅ Fixed: ${fixed}`);
        console.log(`✓ Already correct: ${alreadyCorrect}`);
        console.log(`❌ Errors: ${errors}`);
        console.log('================================================================================\n');

        if (fixed > 0) {
            console.log('🎉 Migration complete! All projects should now display package correctly.');
        } else if (alreadyCorrect === snapshot.size) {
            console.log('✨ All projects already have correct package fields. Nothing to fix!');
        } else {
            console.log('⚠️  Some projects may need manual attention. Check warnings above.');
        }

    } catch (error) {
        console.error('❌ Migration failed:', error);
        throw error;
    }
}

// Run the migration
fixExistingProjects()
    .then(() => {
        console.log('✅ Script completed successfully');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Script failed:', error);
        process.exit(1);
    });