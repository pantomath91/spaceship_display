import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterButton from './FilterButton'
import { setLaunchSuccessFlag } from 'redux/actions/FilterActions'
import { resetOffset } from 'redux/actions/QueryAPI'

const FilterLaunchCard = ({ styles }) => {
    const [launchSuccess, setLaunchSuccess] = useState(null)
    const dispatch = useDispatch()

    const setSuccessfulLaunch = (e) => {
		const launch = e.target.innerText.trim()
        if(launch !== '') {
			if(launch === launchSuccess) {
				setLaunchSuccess(null)
				dispatch(setLaunchSuccessFlag(null))
			} else {
				if(launch === 'True' && launchSuccess !== 'True') {
					setLaunchSuccess('True')
					dispatch(setLaunchSuccessFlag(true))
				} else if(launch === 'False' && launchSuccess !== 'False') {
					setLaunchSuccess('False')
					dispatch(setLaunchSuccessFlag(false))
				}
			}
			dispatch(resetOffset())
        }
    }
    
    return (
		<div className={styles.filter_div}>
			<div className={styles.filter_section_header}>Successful Launch</div>
			<hr width="50%" />
			<div className={styles.filter_year_buttons} onClick={(e) => setSuccessfulLaunch(e)}>
				<FilterButton active={launchSuccess === "True" ? true : false} name={"True"} />
				<FilterButton active={launchSuccess === "False" ? true : false} name={"False"} />
			</div>
		</div>
	);
}

export default FilterLaunchCard
