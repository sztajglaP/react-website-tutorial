import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'

const Ofert = () => {
    const oferts = [
        {
            'name': 'Demo',
            'price': '0',
            'options': [
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': false
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': false
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': false
                }
            ],
            'id': 0
        },
        {
            'name': 'Standard',
            'price': '99',
            'options': [
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': false
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': false
                }
            ],
            'id': 1
        },
        {
            'name': 'Premium',
            'price': '299',
            'options': [
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                },
                {
                    'name': 'opcja w pakiecie',
                    'active': true
                }
            ],
            'id': 2
        }
    ]

    return (
        <div className="ofert">
            <h2 className="section-title">oferta</h2>
            <div className="wrapper">
                <div className="ofert-box">

                    {oferts.map(el => (
                        <div className="card" key={el.id}>
                            <p className="card-title">{el.name}</p>
                            <p className="price">
                                <FontAwesomeIcon icon={faDollarSign} />
                                <span>{el.price}</span>
                            </p>
                            <ul className="options">
                                {el.options.map((item, index) => (
                                    item.active ? 
                                    <li className="options-item active" key={index}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>{item.name}</span>
                                    </li> : 
                                    <li className="options-item" key={index}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                            {el.id == 1 ? 
                                <button className="card-button middle">Wybierz</button> : 
                                <button className="card-button">Wybierz</button>
                            }
                        </div>
                    ))}

                    {/* <div className="card">
                        <p className="card-title">Demo</p>
                        <p className="price">
                            <FontAwesomeIcon icon={faDollarSign} />
                            <span>0</span>
                        </p>
                        <ul className="options">
                            <li className="options-item">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>opcja w pakiecie</span>
                            </li>
                            <li className="options-item">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>opcja w pakiecie</span>
                            </li>
                            <li className="options-item">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>opcja w pakiecie</span>
                            </li>
                            <li className="options-item">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>opcja w pakiecie</span>
                            </li>
                            <li className="options-item">
                                <FontAwesomeIcon icon={faCheck} />
                                <span>opcja w pakiecie</span>
                            </li>
                        </ul>
                        <button className="card-button">Wybierz</button>
                    </div> */}

                </div>
            </div>
        </div>
    );
}
 
export default Ofert;