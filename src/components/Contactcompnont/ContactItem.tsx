import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactItem() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>| ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h2>Contact Page</h2>
        <p>for more information or complain contact us below</p>
      </div>
      <label>Firstname</label>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={data.name}
        onChange={ (e) => handleChange(e)}
      />

      <label>Phone Number</label>
      <input
        type="phone"
        placeholder="number"
        name="phone"
        value={data.phone}
        onChange={ (e) => handleChange(e)}
      />

      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={ (e) => handleChange(e)}
      />

      <label>Type</label>
      <textarea
        placeholder="type here"
        name="message"
        value={data.message}
        onChange={ (e) => handleChange(e)}
      />

      <button type="submit">Submit</button>

      <p>
        {data.name},{data.email},{data.phone},{data.message}
      </p>
    </form>
  );
}