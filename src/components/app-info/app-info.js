import './app-info.css'

function AppInfo({employeesCnt, increasedEmployeesCnt}) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании DAO "<span className="redB">B</span>едолаги"</h1>
            <h2>Общее число сотрудников: {employeesCnt}</h2>
            <h2>Премию получат: {increasedEmployeesCnt}</h2>
        </div>
    )
}

export default AppInfo;