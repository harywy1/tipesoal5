import React from 'react';

export default class Form extends React.Component {
    state = {
        nama : '',
        alamat : '',
        nomor_telepon : '',
        email : '',
        status :'',
        jenis_kelamin : ''
    };

    change = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value });
        
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        alert ( "Halo " );
        
        
    };

    render() {
        return (
            <form>
                <input 
                    name="nama"
                    placeholder="Nama"
                    value={this.state.nama}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name="alamat"
                    placeholder="Alamat"
                    value={this.state.alamat}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name="nomor_telepon"
                    placeholder="Nomor Telepon"
                    value={this.state.nomor_telepon}
                    onChange={e => this.change(e)}
                />
                <br/>
                <input 
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br/>
                <label>
                    Status perkawinan :
                        <select value={this.state.value} 
                        onChange={e => this.change(e)}>
                            <option value="Kawin">Kawin</option>
                            <option value="Belum Kawin">Belum Kawin</option>
                        </select>
                </label>            
                <br/>
                <label>
                    Jenis Kelamin :
                    <label>
                        Laki - laki
                        <input
                        name="jenis_kelamin"
                        type="checkbox"
                        value={this.state.jenis_kelamin}
                        onChange={e => this.change(e)} 
                         />
                    </label>
                    <label>
                        Perempuan
                        <input
                        name="jenis_kelamin"
                        type="checkbox"
                        value={this.state.jenis_kelamin}
                        onChange={e => this.change(e)}
                     />
                    </label>
                    
                </label>
                <br/>
                <button onClick={e => this.onSubmit(e)}>SUBMIT</button>
            </form>
        )
    }
}