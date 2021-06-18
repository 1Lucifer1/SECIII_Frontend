describe('e2e Test', function() {

  before(()=>{
    cy.visit('/');
  });

  beforeEach(()=>{
    cy.reload();
  })

  it('index page', function() {
    cy.contains('项目序号')
    cy.contains('项目名字')
    cy.contains('源文件数')
    cy.contains('报告数')
    cy.contains('操作')

    cy.contains('swt-3.1')
    cy.contains('eclipse-3.1')
    cy.contains('aspectj')

    cy.get('.el-table')

    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);

  })
  it('report page', function (){
    cy.get('.el-table__fixed-right > .el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(2) > .el-table_1_column_5 > .cell > .el-button > span')
      .click()
    cy.contains('缺陷序号')
    cy.contains('简述')
    cy.contains('操作')

    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);
  })
  it('button page', function (){
    cy.get('.btn').click()

    cy.contains('显示评估指标')
    cy.contains('Top@1')
    cy.contains('Top@5')
    cy.contains('Top@10')
    cy.contains('MRR')
    cy.contains('MAP')
    cy.get('.ant-modal-body')
    cy.get('.ant-modal-close-x').click()
  })

  it('rank page', function (){
    cy.get('.el-table__fixed-right > .el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_3 > .cell > .el-button > span').click()
    cy.get('.el-table')
    cy.contains('文件排序')
    cy.contains('得分')
    cy.contains('文件序号')
    cy.contains('包名')
    cy.contains('操作')
    cy.contains('查看')
    // cy.contains('0.7572637241589192')
    cy.contains('1')
    cy.contains('2')
    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);
  })

  it('code page', function (){
    cy.get('.el-table__fixed-right > .el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_5 > .cell > .el-button').click()

    cy.get('.el-card')
    cy.get('.content')
    cy.get('.el-card__header')
    cy.get('.el-card__body')
    cy.get('.path')
    cy.contains(' Copyright (c) 2000, 2005 IBM Corporation and others.')
    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);
  })
})

