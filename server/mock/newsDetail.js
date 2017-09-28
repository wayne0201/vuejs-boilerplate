var RETURN  = {
    "errno": "0",
    "error": "",
    "data":{
        "news_title": "对于一名新手都是废话精神科萨",
        "pub_time": "发表于2016/6/26 17:30",
        "content": "<p><b>1、什么是审核？</b>审核是指对某个单据进行的多级校验处理流程。</p ><p><b>2、什么是送审？</b>送审是将要提交审核的单据提交给审核部门处理。</p ><p><b>3、审核单是什么？</b>审核单其实就是要审核的实体单据。</p ><p><b>4、为什么可以重复提交车辆送审单？</b></p ><p>一方面：因为这里提交的是送审单，在没审核通过之前，车是没有进入库存系统的。也就是说并不是真实的车辆。</p ><p>另一方面：车辆送审单是有新增和转会类型的，以后还会增加修改类型。那么自然可以对同一辆车提多次单据，来进行审核。</p ><p>也就是说，每一次审核是对这个单据进行的审核，审核通过后，如果这是一辆新增的车辆，那么就新增到车辆库存库里，如果是转会或者修改，就是修改原来那辆已经在库存里的车的对应信息。</p ><p><b>5、什么情况下是不能重复提交的呢？</b></p ><p>        一个单据在审批的过程中，是不可以再提对同一事件的送审单的。</p ><p>即，对一辆车，如果在审核中的，是不可以再提同一辆车的送审信息的。</p ><p>可以提的情况是：该单据已经通过、或者该单据被关闭。</p ><p>可以修改的情况是：自己没提交审核之前，或者被驳回是可以修改的。</p ><p><b>6、A公司的车如何转入B公司？</b></p ><p>从B公司提交送审单信息，填写完整的信息，审核通过即可从A公司转移到B公司名下。但是情况5中提到的，需要上一个单子走完流程或者被关闭，B才可以提新送审单。也就是说一辆车同时只能有一个有效的送审单进行。</p >",
        "logo": "", // 公司LOGO图片
        "company_id": "", // 公司ID
        "company": "", // 公司名称
        "scale": "", // 公司规模
        "tags": ["生日祝福", "管三餐"], // 标签
        "label": ["认证", "新晋"] // 认证标签
    }
};

module.exports = function (req, res, next) {
    setTimeout(function(){
        res.json(RETURN);
    },1000)
}