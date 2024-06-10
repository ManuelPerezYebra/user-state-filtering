import { Profile, Status, StyledUser } from "./user.styles"

const User =({img, name, username, active})=>{
    return <StyledUser>
        <Profile>
            <img src={img} alt="" />
        <div>
            <p>{name}</p>
            <p>@{username}</p>
        </div>
        </Profile>
        <Status $active={active}>{active ? "Activo"  : "Inactivo" }</Status>

    </StyledUser>
}
export default User