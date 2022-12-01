import Question from './Question'

const Quiz = () => {
    return (
        <div className='quiz'>
            <div className='score'>Quiz 1/8</div>
            <Question />
            <div className='next-button'>Next question</div>
        </div>
    )
}

export default Quiz
