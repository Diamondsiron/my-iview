<template>
<div>
     <Form ref="formCustom"  :label-width="80">
        <FormItem label="用户编号" prop="passwd">
            <Input type="password" ></Input>
        </FormItem>
        <FormItem label="用户名" prop="passwdCheck">
            <Input type="password"></Input>
        </FormItem>
        <FormItem label="所属分公司" prop="age">
            <Input type="text"></Input>
        </FormItem>
        <FormItem label="用户头像" prop="age">
            <Input type="text"></Input>
        </FormItem>
        <FormItem label="修改密码" prop="age">
            <Input type="text"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">取消</Button>
            <Button type="ghost"  style="margin-left: 8px">保存</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
    export default{
      
    }
</script>
<style scoped>

</style>

