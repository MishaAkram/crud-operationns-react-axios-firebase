import React, { useState } from 'react'
import instance from '../firebase/instance'
import ResultsAdd from './ResultsAdd'
function Results() {
    const [result, setResult] = useState({ results: [], name: "", unit: "", grade:""})
    const handleChange = e => {
        const { name, value } = e.target
        if (name.indexOf(".") !== -1) {
            [name.split(".")[0]][name.split(".")[1]] = value
        } else
            setResult({ ...result, [name]: value })
    }
    const handlePost = (e) => {
        e.preventDefault();

        const Data = {
            name: result.name,
            unit: result.unit,
            grade: result.grade,
        };
        instance.post("./results.json", Data)
            .then((response) => {
                console.log(response);
                const results = [
                    ...result.results,
                    { ...Data, id: response.data.name },
                ];

                setResult({
                    results: results,
                    name: "",
                    unit: "",
                    grade: "",
                });
            })

    };
    return (
        <div className="container">
            <ResultsAdd
                name={result.name}
                unit={result.unit}
                grade={result.grade}
                handleChange={handleChange}
                handlePost={handlePost} />
        </div>
    )
}

export default Results
