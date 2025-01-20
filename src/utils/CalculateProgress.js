export default function CalculateProgress(data) {
    const newProgressObj = {
        total: { quantity: 0, color: "#B273FF", title: "total" },
        PR: { quantity: 0, color: "#FFD700", title: "programming" },
        EN: { quantity: 0, color: "#007BFF", title: "english" },
        PG: { quantity: 0, color: "#00B74A", title: "personal growth" },
        EX: { quantity: 0, color: "#FF4C4C", title: "exercise" },
    };
    if (data.tasks.length) {
        Object.keys(newProgressObj).map(progress => {
            newProgressObj[progress].quantity = Math.trunc(
                (data.tasks
                    .filter((task) => task.type === "workTask" && task.isComplete && (progress === 'total' ? true : task.category === progress))
                    .reduce((acc, task) => acc + task.span, 0) /
                    data.tasks
                        .filter((task) => task.type === "workTask" && (progress === 'total' ? true : task.category === progress))
                        .reduce((acc, task) => acc + task.span, 0)) *
                100
            )
        })
    }
    return newProgressObj

}

