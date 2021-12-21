import React from "react";
import { connect } from "react-redux";

const Substitutes = ({ substitutes, removeSubstitute }) => (
  <section>
    <h2>Substitutes</h2>
    <div className="suplentes">
      {substitutes.map((i) => (
        <article className="suplente" key={i.id}>
          <div>
            <img src={i.foto} alt={i.nombre} />
            <button onClick={() => removeSubstitute(i)}>X</button>
          </div>
          <p>{i.nombre}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  substitutes: state.substitutes,
});

const mapDispatchToProps = (dispatch) => ({
  removeSubstitute(player) {
    dispatch({
      type: "REMOVE_SUBSTITUTE",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);
