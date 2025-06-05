import { useState } from "react";

const Form = ({
  username,
  password,
  setPassword,
  setUserName,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          className="border border-black"
        />
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
