describe('e2e Test', function() {

  before(()=>{
    cy.visit('/');
  });

  beforeEach(()=>{
    cy.reload();
  })

  it('index page', function() {
    cy.contains('缺陷序号')
    cy.contains('简述')
    cy.contains('操作')
    cy.contains('查看')

    cy.contains('75739')
    cy.contains('Variant has no toString()')
    cy.contains('77948')
    cy.contains('NullPointerException in CLabel.findMnemonic')
    cy.contains('78548')
    cy.contains('[consistency] Button Selection fires before MouseUp')

    cy.get('.el-table')

    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);

  })

  it('button page', function (){
    cy.get('.el-button').click()
    cy.contains('显示评估指标')
    cy.get('.ant-modal-body')
    cy.get('.ant-modal-close-x').click()
  })

  it('rank page', function (){
    cy.get('.el-table__fixed-right > .el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_3 > .cell > .el-button > span').click()
    cy.get('.el-table')
    cy.contains('文件排序')
    cy.contains('相似度')
    cy.contains('文件序号')
    cy.contains('文件名')
    cy.contains('操作')
    cy.contains('查看')
    // cy.contains('0.7572637241589192')
    cy.contains('1')
    cy.contains('2')
    cy.contains('Program.java')
    cy.scrollTo(0, 500);
    cy.scrollTo(0, -500);
  })

  it('code page', function (){
    cy.get('.el-table__fixed-right > .el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_1_column_5 > .cell > .el-button').click()

    cy.get('.el-card')
    cy.get('.content')
    cy.get('.el-card__header')
    cy.get('.el-card__body')
    cy.contains('Program.java')
    cy.contains('swt-3.1/src/org/eclipse/swt/program/Program.java')
    cy.contains('Copyright (c) 2000, 2005 IBM Corporation and others')
    cy.scrollTo(0, 500);

  })
})

