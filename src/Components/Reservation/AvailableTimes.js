
function AvailableTimes(props) {


return(
<select value='time'>
{props.time.map(t => <option key={t.id}>{t.time}</option>)}
</select>
)
}

export default AvailableTimes;