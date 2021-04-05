function Notify ({type, message, isOpen, setIsOpen}) {
    
    const textStyles = {
        display: 'flex',
        backgroundColor: type === 'danger' ? 'red' : 'green',
        margin: 0,
        padding: 10,
        textAlign: 'center',
        color: 'white',
    }

    if (!isOpen) {
        return <></>
    } else {
        setTimeout(() => {
            setIsOpen(false)
        }, 5000)
        return (<div style={{
            position: 'absolute',
            width: '100%',
            display: 'flex',
            top: 0,
            justifyContent: 'center'
        }}>
            <h4 style={textStyles}>{message}</h4>
        </div>)
    }

}

export default Notify