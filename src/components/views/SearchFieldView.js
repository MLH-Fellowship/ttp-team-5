import React, { Component } from "react";

// class SearchFieldBar extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       search: '' 
//     }
//   }

//   // onInputChange(search) {
//   //   this.setState({ search });
//   // }

//   render() {
//     return (
//       <div className="search">
//         <h5>Search for a football player:</h5>
//         <input 
//           class="form-control" 
//           type="text" 
//           aria-label="Search" 
//           placeholder="Cristiano Ronaldo" 
//           onChange={event => this.onInputChange(event.target.value)} />
//       </div>
//     );
//   }
// }

const SearchFieldView = props => {
  const {
    handleInputChange,
    handleSubmit
  } = props;

  return (
      //  <div className="search">
      //     <h5>Search for a football player:</h5>
      //       <input 
      //         class="form-control" 
      //         type="text" 
      //         aria-label="Search" 
      //         placeholder="Cristiano Ronaldo" 
      //         onChange={onInputChange} />
      //   </div>
        <div className="search">
        <form onClick={handleSubmit} name="search">
          <div>
            <h5>Search for a football player:</h5>
            <input 
              class="form-control" 
              type="text" 
              aria-label="Search" 
              placeholder="Cristiano Ronaldo" 
              onChange={handleInputChange} />
          </div>
          <div>
              <button type="submit">submit</button>
          </div>
        </form>
      </div>
  );
}
export default SearchFieldView;