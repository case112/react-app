import React from 'react';

const cockpit = (props) => {
    return (

        <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button  
        className={btnClass}
        onClick={this.togglePersonsHandler}>
        Show Persons
        </button>
        {persons}
      </div>

    );
};

export default cockpit;
