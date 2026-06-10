const getNotifications = require("./notifications");
const getPriority = require("./priority");
const fs = require("fs");

async function main() {

    try {

        const data = await getNotifications();

        const notifications = data.notifications;

        const topNotifications = notifications

            .map(notification => ({
                ...notification,
                Priority: getPriority(notification.Type)
            }))

            .sort((a, b) => {

                if (b.Priority !== a.Priority) {
                    return b.Priority - a.Priority;
                }

                return new Date(b.Timestamp) - new Date(a.Timestamp);

            })

            .slice(0, 10);

        fs.writeFileSync(
            "output.json",
            JSON.stringify(topNotifications, null, 2)
        );

        console.log("TOP 10 PRIORITY NOTIFICATIONS");
        console.log(topNotifications);

        console.log("\noutput.json generated successfully");

    } catch (error) {

        console.log(
            error.response?.data || error.message
        );

    }

}

main();