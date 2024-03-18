import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [fname, setFname] = useState({ name: "", pass: "" });
  const [api, setApi] = useState([]);





  useEffect(() => {
    console.log("hello ")
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((mod) => {
        setApi(mod?.data);
      })
      .catch((e) => console.log(e))
  }, [fname]);

  const handleSubmit = (idx) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", { name: fname })
      .then((mode) =>
        setApi([...api, mode?.data]))


      .catch((err) => console.log(err))
    console.log(api);
  }

  const handelDelete = (idx) => {
    console.log(api);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${idx}`)
      .then((deldata) =>
        console.log(deldata))

          .catch((e) => console.log(e))
    console.log(api);
  }
  return (
    <>
      <div className='demo1'>

        <div className='border-2 border-yellow-500 p-5 text-center'>
          <input type='text' id='name' className='border-red-400 border-2' value={fname.name} onChange={(e) => setFname(e.target.value)} placeholder="Your name" name='fname' />
          <br />
          <br />
          <input type='password' id='pass' className='border-red-400 border-2' value={fname.pass} onChange={(e) => setFname(e.target.value)} placeholder='password' name='pass' />
          <br /><br />
          <button type='submit' className='bg-yellow-400 px-5 py-2' onClick={() => handleSubmit()}>submit</button>
        </div>
      </div>
      <div className='flex justify-center'>

        <table className='border-2 border-black'>
          <thead className='text-center'>
            <tr>
              <th>name</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {api.map((item, index) => {
              return (
                <tr className='border-2 border-black'>
                  <td className='border-2 border-black'>{item.id}</td>
                  <td className='border-2 border-black'>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button className='border-2 border-black' type='button' onClick={() => handelDelete(index)}>delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default App;
