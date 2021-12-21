import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

function Players({ players, addHolder, addSubstitute }) {
  const gridJugadores = createRef();

  useEffect(() => {
    setScrollContainer();
    document.addEventListener("click", setScrollContainer);
  }, []);

  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current;
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName("jugador");
        let itemsLength = items.length;
        let bp = window.matchMedia("(min-width: 640px)").matches
          ? window.matchMedia("(min-width: 1024px)").matches
            ? 4
            : 2
          : 1;

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0);
          return (itemsLength / n) * 100;
        };
        return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                  `;
      };
      let styles =
        !desktop && window.matchMedia("(min-width: 1024px)").matches
          ? `display: grid; grid-row-gap: 1rem;`
          : generatedGrid();
      container.setAttribute("style", styles);
    }
  };

  return (
    <section>
      <h2>Players</h2>
      <div className="contenedor-jugadores">
        <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
          {players.map((i) => (
            <article className="jugador" key={i.id}>
              <img src={i.foto} alt={i.nombre} />
              <h3>{i.nombre}</h3>
              <div>
                <button onClick={() => addHolder(i)}>Holder</button>
                <button onClick={() => addSubstitute(i)}>Substitute</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  addHolder(player) {
    dispatch({
      type: "ADD_HOLDER",
      player,
    });
  },
  addSubstitute(player) {
    dispatch({
      type: "ADD_SUBSTITUTE",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
