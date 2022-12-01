import Answer from './Answer'

const Question = () => {
    return (
        <>
            <div className='question'>Text of the Question</div>
            <div className='answers'>
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </>
    )
}

export default Question
