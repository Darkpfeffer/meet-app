export const NumberOfEvents = ({ setCurrentNOE }) => {
    const numberChange = (event) => {
        const value = event.target.value
        setCurrentNOE(value)
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