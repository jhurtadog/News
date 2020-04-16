import React, { useState } from "react";
import axios from "axios";

function Notice2() {
  const initialState = {
    id: 0,
    about: "",
    title: "",
    summary: "",
  };
  const [state, setState] = useState(initialState);
  const getApi = async () => {
    const result = await axios.get(
      `https://iris.net.co/products/semana/items/633525`
    );
    setState({
      ...state,
      id: result.data.data.id,
      about: result.data.data.about,
      title: result.data.data.title,
      summary: result.data.data.summary,
    });
  };

  const onClick = () => {
    getApi();
  };
  return (
    <div className="text-center">
      <h1 className="text-center">Noticia 2</h1>
      <br />
      <button type="button" onClick={() => onClick()} class="btn btn-primary">
        Leer Noticia
      </button>
      <form>
        <br />
        <br />
        <div class="form-group">
          <label for="exampleInputEmail1">
            <strong>ID</strong>: {state.id}
          </label>
          <br />
          <label for="exampleInputEmail1">
            <strong>About:</strong> {state.about}
          </label>
          <br />
          <label for="exampleInputEmail1">
            <strong>Title:</strong> {state.title}
          </label>
          <br />
          <label for="exampleInputEmail1">
            <strong>Sumary:</strong> {state.summary}
          </label>
        </div>
      </form>
      <br />
    </div>
  );
}

export default Notice2;
