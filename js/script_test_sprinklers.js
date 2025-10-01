
function triggerAPI(action) {
    let urls = {
        bana4v: "https://cloud.openthings.io/forward/v1/OTa45e9ace2fbc47ad8a1ccea3d3e9f3/mp?pw=369ae4322bccd582a690d03bce587737&pid=6&uwt=255",
        bana4o: "https://cloud.openthings.io/forward/v1/OTa45e9ace2fbc47ad8a1ccea3d3e9f3/mp?pw=369ae4322bccd582a690d03bce587737&pid=7&uwt=255",
        bana5v: "https://cloud.openthings.io/forward/v1/OTa45e9ace2fbc47ad8a1ccea3d3e9f3/mp?pw=369ae4322bccd582a690d03bce587737&pid=8&uwt=255",
        bana5o: "https://cloud.openthings.io/forward/v1/OTa45e9ace2fbc47ad8a1ccea3d3e9f3/mp?pw=369ae4322bccd582a690d03bce587737&pid=9&uwt=255",
        stop_all "https://cloud.openthings.io/forward/v1/OTa45e9ace2fbc47ad8a1ccea3d3e9f3/cr?pw=369ae4322bccd582a690d03bce587737&t=[0,0,0,0,0,0,0,0]"
    };

    fetch(urls[action], {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            alert("Åtgärd utförd: " + action);
        } else {
            alert("Fel vid API-anrop: " + action);
        }
    })
    .catch(error => {
        alert("Nätverksfel: " + error);
    });
}
