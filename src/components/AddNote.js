import React,{useContext,useState} from "react";
import noteContext from "../context/Notes/noteContext";
//eslint-next-line-disable
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description:"", tag:""})

  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag);
    setNote({title: "", description:"", tag:""})
    props.showAlert("Added Successfully", "success")
  }

  const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <h1 className="my-3">Add a Note </h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="title"
              onChange={onChange} value={note.title}

            />          
          </div>
          
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange} value={note.description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby="title"
              onChange={onChange} value={note.tag}
            />          
          </div>

          <button disabled ={note.title.length<6 || note.description.length<5} type="submit" className="btn btn-dark" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
