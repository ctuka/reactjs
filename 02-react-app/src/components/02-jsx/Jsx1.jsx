export default function Jsx1() {
    const x = 10;
    const user = {
        name: "John",
        lastName: "Doe",
        age: 25
    };

    const {name} =user; //Destructering 

    return (
        <div id="" className="">
            <div>Hello</div>
            <h1>{x}</h1>
            <p>Your Name : {name}</p>
            <p>Your Last Name: {user.lastName}</p>
            <p>Your age: {user.age}</p>
            <div>World </div>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

        </div>
    );
}

