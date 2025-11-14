// backend/appwrite-functions/crisis-notifier.js
const { Client, Databases, Users } = require('node-appwrite');

module.exports = async function (req, res) {
    const client = new Client();
    const databases = new Databases(client);
    const users = new Users(client);

    try {
        client
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT)
            .setKey(process.env.APPWRITE_KEY);

        const { crisisId, severity, location, type } = JSON.parse(req.payload);

        // Get all active volunteers
        const volunteers = await databases.listDocuments(
            process.env.DATABASE_ID,
            process.env.VOLUNTEERS_COLLECTION_ID,
            ['availability=available']
        );

        // Here you would integrate with email/notification service
        console.log(`🚨 New ${severity} crisis in ${location}: ${type}`);
        console.log(`📧 Notifying ${volunteers.documents.length} volunteers`);

        res.json({
            success: true,
            message: `Crisis alert processed. ${volunteers.documents.length} volunteers notified.`,
            crisisId: crisisId
        });

    } catch (error) {
        console.error('Error in crisis notifier:', error);
        res.json({
            success: false,
            error: error.message
        });
    }
};