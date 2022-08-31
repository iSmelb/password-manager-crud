import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SwitchPassword({showState,...props}) {
    return (
        <div {...props}>
            {showState
                ? <FontAwesomeIcon icon={faEyeSlash} />
                : <FontAwesomeIcon icon={faEye} />
            }
        </div>
    )
}

export default SwitchPassword