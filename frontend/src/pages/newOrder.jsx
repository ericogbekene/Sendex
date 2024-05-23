import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewOrder() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();

    // Get user email address
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    // Get user's password
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    // Store User's login information for validation
    const addLoginInfo = async (event) => {
        event.preventDefault();
        navigate("/home")
    }

  return (
    <div className="home login">
        <div>
            <p className="logo">Sendex</p>
            <p className="login_text">Please create your order</p>
            <form onSubmit={addLoginInfo}>
                <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required/>
                <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} required/>
                <button className="button">Create Order</button>
            </form>
        </div>
    </div>
  )
}

export default NewOrder;
