import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {Link} from 'react-router-dom'


//css
import '../../static/less/person/login.less'

//api
import {login} from "../../api/person";


const FormItem = Form.Item;

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code: 1
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let modal;
        this.props.form.validateFields( async (err, values) => {
            if (!err) {
                let {userName:name, password} = values;
                let res =await login({name, password});
                if(parseFloat(res.code) === 0){
                    modal = Modal.success({
                        title: '恭喜您',
                        content: '登录成功！',
                    });
                    this.props.history.go(-1);
                }else{
                    modal = Modal.success({
                        title: '很遗憾',
                        content: '登录失败',
                    });
                }
                setTimeout(() => modal.destroy(), 1000);
            }
        });
    };

    render(){
        const { getFieldDecorator } = this.props.form;

        return <section className={'login'}>
            <header>
                <Icon type="arrow-left" onClick={ev=>{
                    this.props.history.go(-1)
                }
                }/>
                <span>登录</span>
            </header>
            <div className="notice">
                <a href="javascript:;"><Icon type="ellipsis" /></a>
                <h2>华为账号</h2>
                <p>华为帐号适用于访问所有华为服务。
                    您可登录该帐号，访问云空间、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
            </div>

            <div className="login-content">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.success}>
                            立即登录
                        </Button>

                    </FormItem>
                    <div className={'forget'}>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                        </FormItem>
                        <FormItem>
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Link to={'/person/register'}>立即注册!</Link>
                        </FormItem>
                    </div>
                </Form>
            </div>

            <div className="space-line">
                <span>
                    其他登录方式
                </span>
            </div>

            <div className="other">
                <a href=""><img src="https://hwid1.vmall.com/CAS/up/rss_19/css/mobile/standard_rss/images/wap_qq.png?UP_CAS_2.6.2.102" alt=""/></a>
                <a href=""><img src="https://hwid1.vmall.com/CAS/up/rss_19/css/mobile/standard_rss/images/wap_alipay.png?UP_CAS_2.6.2.102" alt=""/></a>
            </div>

        </section>
    }
}


export default Form.create()(Login);
