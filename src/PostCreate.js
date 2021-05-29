import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  // Piece os State using the useState react hook.
  // We create the property 'state' and the setter 'setTitle'
  // The state is initialized with an empty string => useState('')
  const [title, setTitle] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post('http://localhost:4000/posts', {
        title,
      })
      .catch((err) => {
        console.log(`PostCreate submit error: ${err}`);
      });

    setTitle('');
  };

  // The input has an example of two way property binding
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
