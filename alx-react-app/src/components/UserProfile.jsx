const UserProfile = (props) => {
const {name, age, bio} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>Bio : {bio}</p>
        </div>
    );
}

export default UserProfile;