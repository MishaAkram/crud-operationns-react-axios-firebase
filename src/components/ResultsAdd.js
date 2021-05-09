import React from 'react'

function ResultsAdd({ name, unit, grade, handleChange, handlePost }) {
    return (
        <div className="results-add">
            <form
                id="addResultsForm"
                className="ui-form"
                autoComplete="off"
                onSubmit={(e)=>handlePost(e)}
            >
                <h2>New Entry</h2>
                <label>Name:</label>
                <input
                    autoFocus
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>handleChange(e)}
                />
                <label>Unit:</label>
                <input
                    name="unit"
                    type="text"
                    required
                    placeholder="Unit"
                    value={unit}
                    onChange={(e)=>handleChange(e)}
                />
                <label>Grade:</label>
                <input
                    name="grade"
                    type="text"
                    required
                    placeholder="Grade"
                    value={grade}
                    onChange={(e)=>handleChange(e)}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ResultsAdd
