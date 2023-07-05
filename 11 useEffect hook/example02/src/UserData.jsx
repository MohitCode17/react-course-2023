const UserData = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        const { id, name, email } = user;
        const { street, city, zipcode } = user.address;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              {street}, {city}, , {zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
