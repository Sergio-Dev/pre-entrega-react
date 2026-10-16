import ItemTeam from "../ItemTeam/ItemTeam"

function TeamList({team}){
    return(
        <>
            {
                team.map( (member)=>(
                    <ItemTeam 
                        key={member.id}
                        {...member}
                    />
                ) )
            }
        </>
    )
}

export default TeamList