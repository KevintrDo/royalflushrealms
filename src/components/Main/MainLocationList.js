

const MainLocationList = (props) => {


    return (
        <Card className="users">
            {/* <ul> */}
                {props.users.map((user) => (
                    <User
                        key={user.id}
                        img={user.img}
                        name={user.name}
                        age={user.age}
                        major={user.major}
                    />
                ))};
            {/* </ul> */}
        </Card>
    )
}