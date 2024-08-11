
  <template>
    <div class="login">
      <h1 class="title">{{ title }}</h1>
      <a-form ref="formRef" :model="form" :rules="rules" @finish="onSubmit" :label-col="labelCol" :wrapper-col="rapperCol">
        <h5>登录</h5>
        <a-form-item label="邮箱/手机号:" name="name">
          <a-input v-model:value="form.name" placeholder="请输入邮箱/手机号" />
        </a-form-item>
        <a-form-item label="密码：" name="password">
          <a-input v-model:value="form.password" type="password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item class="text-r">
            <a-button type="primary" html-type="submit" >登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </template>
  
<script >
import { login } from '../api/login';
import { getFormConfig } from '@/hooks/businessHook';
import { setToken } from '@/utils/storage'
const { rapperCol } = getFormConfig()


export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const title = import.meta.env.VITE_APP_TITLE

    const form = ref({
      name: '',
      password: '',
    });

    const labelCol ={
      span: 6,
    }

    const rules = {
      name: [{ required: true, message: '请输入邮箱/手机号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    };

    const onSubmit = (values) => {
        login(values).then((res) => {
          setToken(res.data.accessToken)
          router.push('/')
        });
    };
    return {
      form,
      rules,
      onSubmit,
      labelCol, rapperCol,
      title
    };
  }
});
</script>
  
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: aliceblue;
  .title {
    font-size: 30px;
    font-weight: bold;
    padding: 60px 0 60px 40px;
  }
  .ant-form {
    width: 500px;
    border-radius: 5px;
    background: #fff;
    margin: auto;
    padding: 18px 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .ant-dropdown-trigger {
      float: right;
      margin-right: -20px;
    }
    h5 {
      font-size: 26px;
      text-align: center;
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .ant-form {
      width: 60%;
    }
  }
  @media screen and (max-width: 769px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .ant-form {
      width: 90%;
    }
  }
}
</style>
