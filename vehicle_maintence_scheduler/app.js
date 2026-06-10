const fs = require("fs");

const { getDepots, getVehicles } = require("./api");

const optimizeTasks = require("./scheduler");

const generateOutput = require("./output");

async function main() {

    try {

        const depotsData = await getDepots();

        const vehiclesData = await getVehicles();

        const depots = depotsData.depots;

        const vehicles = vehiclesData.vehicles;

        const finalOutput = [];

        for (const depot of depots) {

            const result = optimizeTasks(
                vehicles,
                depot.MechanicHours
            );

            finalOutput.push(
                generateOutput(
                    depot,
                    result
                )
            );
        }

        fs.writeFileSync(
            "output.json",
            JSON.stringify(
                finalOutput,
                null,
                2
            )
        );

        console.log(
            "Output written to output.json"
        );

    } catch (error) {

        console.log(
            error.response?.data ||
            error.message
        );
    }
}

main();