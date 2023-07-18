export const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const numberChange = (event) => {
        const value = event.target.value
        setCurrentNOE(value)

        let errorText;
        if(isNaN(event.target.value) === true) {
            errorText = "Number of events must contain only numbers"
        } else if  (event.target.value <= 0) {
            errorText = "Number of events must be greater than 0"
        } else if (event.target.value > 50) {
            errorText = "The maximum number of events is 50"
        } else {
            errorText = ""
        }

        setErrorAlert(errorText)
    }

    return (
        <div 
            id="number-of-events" 
            className='App-header__item'
        >
            <label>
                Number of events:
            </label> 
            <input 
                role="textbox" 
                defaultValue={32} 
                onChange={numberChange}
            >
            </input>
        </div>
    )
}