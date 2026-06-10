function generateOutput(
    depot,
    result
) {

    return {
        depotId: depot.ID,
        mechanicHours: depot.MechanicHours,
        totalImpact: result.totalImpact,
        totalDuration: result.totalDuration,
        selectedTasks: result.selectedTasks.map(
            task => task.TaskID
        )
    };
}

module.exports = generateOutput;