import styled from 'styled-components'

export const Input = styled.input({
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    ':focus': {
        borderColor: '#66afe9',
        outline: '0',
        boxShadow:
            'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
    },
})

export const CompanyContainer = styled.div({
    display: 'block',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid gray',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#333',
})