import React ,{useState}from 'react'

function Todoform(props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault();

      //props.onSubmit({
          //id :Math.floor(Math.random() * 10000),
         // text: input 
      //})

      setInput('');

  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Add task ' 
          value={input}
          name="text"
          className='todo-input'
          onChange={handleChange}
          />
          <button className='to-do button'>Add task</button>
        
    </form>
  )
}

export default Todoform