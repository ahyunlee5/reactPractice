'use strict';

function Header(props) {
    return (
        <header role='header'>
            <h1> {props.name} Resume</h1>
        </header>
    )
}

function App(props) {
    return (
        <div className='container'>
            <Header name= {props.name} />
        <header>
            <img className='photo' src='https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg' alt= "selfie"/>
            <h1>Sally Student</h1>
        <address>
            <ul>If interested:</ul>
                <li>Email: sally@gmail.com</li>
                <li>Phone #: (248)880-7810</li>
        </address>
        </header>
  <main>
    <h2>
      Professional Experience
    </h2>
      <h4>
        University of Michigan School of Engineering
      </h4>
      <h6>
        Research Assistant September 2015 - May 2016
      </h6>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h4>Bucci</h4>
      <h6>Intern March 2017 - December 2017</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
  </main>
  <section>
    <h2>Eduction</h2>
      <h5>University of Michigan - B.S. 2015</h5>
  </section>
  <section>
    <h2>
      Skills
    </h2>
    <ul>
      <li>Microsoft Suite</li>
      <li>Data Analysis</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </section>
  </div>
    )
}

App.defaultProps = {
    name: 'Sally Student'
};

ReactDOM.render(
    <App name='Sally Student' />,
    document.querySelector('#application-root')
);