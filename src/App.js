import React from 'react';

class App extends React.Component {
    render() {
        return <div>
            <h1>IP transform</h1>
            <input type="text" id="ip"></input>
            <h2 id='result'></h2>
            <button>转换</button>
            </div>
    }

}
export default App;