import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';


class BadgeNewEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };
  componentDidMount(){
    this.fetchData();
  }

  fetchData =  async e => {
    this.setState({loading: true, error:null});
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading: false, form: data});
      console.log(this.state.form.firstName);
    }catch(error){
      this.setState({loading: false, error: error});
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading: true, error:null});
    try{
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading: false});

      //ir al formulario 
      this.props.history.push('/badges');
    }catch(error){
        this.setState({loading: false, error:error});
    }
  }
  render() {
    if(this.state.loading === true){
      return <PageLoading/>;
    }
   
    return (
      <React.Fragment>
      
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOBTITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>

              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNewEdit;
