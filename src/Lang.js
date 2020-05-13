class Lang {

    zh_CN = {
        project: {
            rule:"规则",
            title: "合约详情",
            contractAddress: "合约地址",
            balanceSero: "当前余额 (SERO)",
        },

        account: {
            title: {
                utxo: "钱包账户",
                contract: "合约账户",
                swith: "切换账户",
                balanceSero: "余额 (SERO)",
                estimatedTotal: "预计总收益 (SERO)",
                dayIncome: "当天返还比例",
                staticIncome: "当天静态返还 (SERO)",
                withdraw: "可提现金额 (SERO)",
                detail: "详情",
                id: "编号",
                referId: "推荐人编号",
                areaId: "大区编号",
                totalInvest: "本金",
                profitLevel: "收益倍数",
                latestTime: "最新收益时间",
                totalReturn: "当前返还总数(SERO)",
                totalReturnDay: "当天返还总数(SERO)",
                recommend: "下级人数",
                staticIncomeTips: "今天的静态收益已经支付到可提现账户.",
                staticIncomeTips2: "触发收益到提现账户.",
                investDetail: "投资详情",
                myIncome: "我的业绩",
                areaTotal: "大区业绩",
                areaOtherTotal: "业绩总和(不含大区)",

                staticReward: "静态返还",
                recommendReward: "推荐奖",
                nobilityReward: "星级奖",
                vipReward: "VIP奖",
                viewCode: "查看智能合约",

            },
            button: {
                deposit: "充值",
                invest: "投资",
                trigger: "触发收益",
                withdraw: "提现",
                close: "关闭",
                copy: "拷贝",
            },
            modal: {
                deposit: {
                    title: "充值",
                    copy: "拷贝",
                },

                invest: {
                    title: "投资",
                    referId: "推荐人编号",
                    amount: "投资金额",
                    amountTips: "10 SERO起投",
                    availableSERO: "可用的余额",
                    total: "应付合计",
                    estimate: "预计收益",
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                trigger: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                withdraw: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                    tips: "* 提现金额将直接提到UTXO账户.",
                },
            },
        },
        toast: {
            lessAmount: "SERO余额不足以支付本次交易.",
            minInvest: "最小投资金额为 10 SERO.",
            tx: "交易提交成功, 等待区块打包交易, 交易哈希: ",
            copySuccess: "拷贝成功! ",
            rule:`                  
区块链最大的风口在匿名，欢迎来到匿名尖峰世界～黑色以太坊SERO！！！

                 合约规则

1.以推荐码作推荐链接关系。
2.静态收益 ：
    为合约地址币数总量的三十分之一加权分配，确保了该智能合约永久运行，享受首条匿名公链的未来愉快价值空间。而单个帐户的  当天静态返还=个人当前未返还总数÷全网当前未返还总数×当天返还总数；另外单个帐户日最高释放量为预计总收益的千分之二，超出部分会继续返回合约池继续分配。 
    玩家参与条件： 
    A级：10≤X＜500 SERO 静+动态奖3倍出局 ；
    B级：500≤X＜5000个SERO 静+动态奖4倍出局； 
    C级：5000个SERO及以上 静+动态奖5倍出局；
    可原点位复投加单。 （备注：预计总收益=实际投资额x相应倍数） 

3.分享收益：
    a）永久享受第一层被分享人新增业绩的10%、第二层的6%。
    b）直接分享业绩达3万SERO，可享受第三层被分享人新增业绩的1% ，依此类推直接分享业绩每增加1万SERO，可增加享受多1层被分享人新增业绩的1%，最高可享受12层。
    c）直接分享累计业绩未达到b描述条件时，投资额累计达到10万及10万以上SERO也可以直接领取3到12层内每层新增业绩的1%。
    d）分享收益每日结算，可提现可复投。
 
4.管理奖:
    除去最大业绩部门之外， 其它所有业绩相加计算。
    级别 业绩 收益
    一星 除最大直推部门业绩外，其余所有直推部门业绩总和10万 SERO 分享伞下新增业绩2%、平级拿新增业绩1% 
    二星 除最大直推部门业绩外，其余所有直推部门业绩总和50万 SERO 分享伞下新增业绩4%、平级拿新增业绩2% 
    三星 除最大直推部门业绩外，其余所有直推部门业绩总和150万SERO 分享伞下新增业绩6%、平级拿新增业绩3% 
    四星 除最大直推部门业绩外，其余所有直推部门业绩总和300万SERO 分享伞下新增业绩8%、平级拿新增业绩4% 
    (备注：分享收益、平级收益即时结算，有级差、有烧伤；平级奖指的是同部门出现第一个平级的时候，依然可以拿它网体下新增业绩对应星级收益，直到同部门中出现新的平级，则平级奖由倒数第二个平级者获得。各个星级的平级奖依此类推，只有出现平级才会出现平级奖。)
5.技术占股6% 
6.系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改，自动运行，自动分发。
7.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
8.开源代码查询地址：https://gitee.com/add-plus/add`,
        }
    };

    en_US = {
        project: {
            rule:"规则",
            title: "Contract Info",
            contractAddress: "Contract Address",
            balanceSero: "Current Balance (SERO)",
        },

        account: {
            title: {
                utxo: "Wallet Account",
                contract: "Contract Account",
                swith: "Switch Account",
                balanceSero: "Balance (SERO)",
                estimatedTotal: "Estimated Total Income (SERO)",
                dayIncome: "Return rate on the day",
                staticIncome: "Static Return (SERO)",
                withdraw: "Withdrawal Account (SERO)",
                detail: "Detail",
                id: "ID",
                referId: "Refer ID",
                areaId: "Large Area ID",
                totalInvest: "Total Invest",
                profitLevel: "Profit Level",
                latestTime: "Latest Share Time",
                totalReturn: "Total Return",
                totalReturnDay: "Total return on the day (SERO)",
                recommend: "Recommend Number",
                staticIncomeTips: "Your income have been paid to the withdrawal account.",
                staticIncomeTips2: "Trigger to withdrawal account. ",
                investDetail: "Invest Info",
                myIncome: "My performance",
                areaTotal: "Regional performance",
                areaOtherTotal: "Total performance (excluding the large region)",

                staticReward: "Static",
                recommendReward: "Recommend",
                nobilityReward: "Nobility",
                vipReward: "VIP",
                viewCode: "View Smart Contract",
            },
            button: {
                deposit: "Deposit SERO",
                invest: "Invest",
                trigger: "Trigger Income",
                withdraw: "Withdraw",
                close: "Close",
                copy: "Copy",
            },
            modal: {
                deposit: {
                    title: "Deposit",
                    copy: "COPY",
                },

                invest: {
                    title: "Invest",
                    referId: "Refer ID",
                    ticket: "Tickets",
                    amount: "Invet Amount",
                    amountTips: "At least invest 10 SERO",
                    availableSERO: "Available Blance",
                    availableExchange: "Max Exchange",
                    total: "Total",
                    estimate: "Estimated Return",
                    password: "Password",
                },

                trigger: {
                    password: "Password",
                },

                withdraw: {
                    password: "Password",
                    tips: "* This is the withdrawal of the amount to the UTXO account.",
                },
            },
        },
        toast: {
            lessAmount: "The balance is not enough to pay for this transaction.",
            minInvest: "Invest Amount at least 10 SERO.",
            tx: "The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",
            copySuccess: "Copy to clipboard successfully! ",
            rule:`1. Use the referral code to refer and establish link relationship.
2. Fixed Income
      The Fixed Income is distributed to one-thirtieth of the total fund account every day as the total fixed dividend of the entire network on that day, ensuring that the smart contract runs permanently and enjoys the pleasant future value of the first anonymous public chain. 
The number of Fixed revenues SEROs released to a single account = the total number of SEROs that have not been returned by the individual ÷ the total number of SEROs that have not been returned across the entire network x 1/30 of the total number of SEROs at the contract fund pool on the day.
In addition, the maximum daily release of individual accounts is two thousandths of the expected total income, and the excess will continue to return to the contract fund pool account.
Player Participation Criteria:
Level A: 10 ≤ X <500 SERO, Fixed + Dynamic Award 3 times out.
Level B: 500 ≤ X <5000 SERO, Fixed + Dynamic Awards 4 times out.
Level C: 5000 SERO and above, Fixed + Dynamic Awards 5 times out.
You can re-invite and add your orders.
(Note: Estimated Total Return = Actual Investment Amount X Corresponding Multiples)

3. Referral Revenue: 26%
a) Permanently enjoy 10% of the revenue of the 1st level referral and 6% of the 2nd level.
 b) Earn revenue of up to 30,000 SERO on direct referrals, you can enjoy 1% of the additional revenue of the 3rd level referral, and so on. For every 10,000 SERO of direct referral revenue, you can enjoy 1% of revenue of every additional level up to 12 levels of referrals.
 c) When direct referral revenue results do not meet the conditions described in b, for the cumulative investment amount reaching 100,000 SERO and above, can also directly receive 1% of each additional revenue within 3 to 12 levels.
d) Referral income is settled daily, withdrawable and re-investable.


4.Management Award: 12%
Except for the top performances, all other revenue results are added up.




Level               Performance                     Revenue

One Star           In addition to the largest direct sales performance, the total revenue of all other direct sales is 100,000 SERO            Reach One Star level and get 2% of new revenue under referral downline and 1% of new revenue at the same star level.
Two Star          In addition to the largest direct sales performance, the total revenue of all other direct sales is 500,000 SERO          Reach Two Star level and get 4% of new revenue under referral downline and 2% of new revenue at the same star level.&#x2028;
Three Star          In addition to the largest direct sales performance, the total revenue of all other direct sales is 1.5 million SERO          Reach Three Star level and get 6% of new revenue under referral downline and 3% of new revenue at the same star level.
Four Star          In addition to the largest direct sales performance, the total revenue of all other direct sales is 3 million SERO          Reach Four Star level and get 8% of new revenue under referral downline and 4% of new revenue at the same star level.

(Remarks: Instant settlement of referral revenue and star level reward, there are level differences and burns. The Level Award refers to the time when the first level of the same Star appears under the downline, you can still get the new revenue under the down-line corresponding to the Star award. Until a new Star Level appears in the same downline, the Star Level award is won by the penultimate Star Level. The Star level awards so on, the Star level award will only appear if the new level appears.)

5. Technology Services holds 6%
6. The system is open source, data is on-chain, code is written, decentralized accounting, no backdoor, cannot be tampered, automatic operation, automatic distribution.
7. The system shows contract rules and default recommendation codes, and players can actively participate without a referrer.`,
        },
    }

    be_BY = {
        project: {
            rule:"规则",
            title: "Детали контракта",
            contractAddress: "Адрес контракта",
            balanceSero: "Текущий баланс (SERO)",
        },

        account: {
            title: {
                utxo: "Счет кошелька",
                contract: "Контокоррентный счет",
                swith: "Сменить аккаунт",
                balanceSero: "Баланс (SERO)",
                estimatedTotal: "Расчетный общий доход (SERO)",
                dayIncome: "День Доход",
                staticIncome: "Фиксированный доход дня (SERO)",
                withdraw: "Доступен вывод средств (SERO)",
                detail: "подробности",
                id: "Число",
                referId: "Идентификатор реферера",
                areaId: "ID региона",
                totalInvest: "Основная сумма",
                profitLevel: "Многократный доход",
                latestTime: "Время последнего дохода",
                totalReturn: "Всего текущих возвратов (SERO)",
                totalReturnDay: "Всего возвращено в день (SERO)",
                recommend: "Количество рефералов",
                staticIncomeTips: "Сегодняшний фиксированный доход выплачивается на счет снятия",
                staticIncomeTips2: "Триггер доход на счет вывода",
                investDetail: "Детали инвестирования",
                myIncome: "Мое выступление",
                areaTotal: "Региональный спектакль",
                areaOtherTotal: "Общий доход (кроме региональных)",

                staticReward: "Фиксированный доход",
                recommendReward: "реферальные вознаграждения",
                nobilityReward: "Звездная награда",
                vipReward: "VIP Награда",
                viewCode: "Посмотреть смарт-контракт",

            },
            button: {
                deposit: "депозит",
                invest: "инвестиции",
                trigger: "Триггер доход",
                withdraw: "Снять со счета",
                close: "близко",
                copy: "копия",
            },
            modal: {
                deposit: {
                    title: "депозит",
                    copy: "копия",
                },

                invest: {
                    title: "инвестиции",
                    referId: "Идентификатор реферера",
                    amount: "Сумма инвестиций",
                    amountTips: "Начинает кастовать 10 SERO",
                    availableSERO: "доступные средства",
                    total: "Всего к оплате",
                    estimate: "Расчетный доход",
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                trigger: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                withdraw: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                    tips: "* Вывод средств будет производиться непосредственно на счет UTXO.",
                },
            },
        },
        toast: {
            lessAmount: "Баланса SERO недостаточно для покрытия этой транзакции.",
            minInvest: "Минимальная сумма инвестиций составляет 10 SERO.",
            tx: "Предоставление транзакции успешный, ожидание транзакции блока упаковки, хэш транзакции: ",
            copySuccess: "Успешно скопировано",
            rule:`1. Используйте реферальный код для ссылки и установления связи.


2. Фиксированный доход
      Фиксированный доход распределяется на одну тридцатую часть общего счета фонда каждый день в качестве общего фиксированного дивиденда всей сети в этот день, обеспечивая постоянное выполнение смарт-контракта и приятную будущую стоимость первой анонимной публичной цепочки.
Количество SERO фиксированных доходов, выпущенных на один счет = общее количество SERO, которые не были возвращены отдельным лицом ÷ общее количество SERO, которые не были возвращены по всей сети, x 1/30 от общего количества SERO в пул контрактного фонда в день.


Кроме того, максимальный ежедневный выпуск отдельных учетных записей составляет две тысячи долей ожидаемого общего дохода, и превышение будет по-прежнему возвращаться на счет пула контрактных фондов.

Критерии участия игрока:

Уровень A: 10 ≤ X <500 SERO, фиксированный + динамический бонус 3 раза.
Уровень B: 500 ≤ X <5000 SERO, фиксированная + динамическая награда 4 раза.
Уровень C: 5000 SERO и выше, Fixed + Dynamic Awards 5 раз.
Вы можете повторно пригласить и добавить свои заказы.
(Примечание. Предполагаемая общая доходность = фактическая сумма инвестиций X, соответствующая коэффициенту)

3. Доход от рефералов: 26%

а) Постоянно получайте 10% от дохода реферала 1-го уровня и 6% от 2-го уровня.
 
б) Заработайте до 30 000 SERO на прямых рефералах, вы можете получить 1% дополнительного дохода от рефералов 3-го уровня и так далее. За каждые 10 000 SERO прямых доходов рефералов вы можете получать 1% дохода с каждого дополнительного уровня до 12 уровней рефералов.
 
c) Когда результаты прямых доходов от рефералов не соответствуют условиям, описанным в b, совокупная сумма инвестиций, достигающая 100 000 SERO и выше, также может напрямую получать 1% от каждого дополнительного дохода в пределах от 3 до 12 уровней.

г) Реферальный доход рассчитывается ежедневно, снимается и реинвестируется.


4. Награда за управление: 12%

За исключением лучших показателей, все остальные результаты выручки суммируются.



уровень     Производительность     доход



Одна звезда В дополнение к самым высоким показателям прямых продаж общий доход от всех других прямых продаж составляет 100 000 SERO. Достигните уровня «Одна звезда» и получите 2% нового дохода в соответствии с рекомендациями и 1% нового дохода на том же звездном уровне.

Две звезды В дополнение к самым высоким показателям прямых продаж, общий доход от всех других прямых продаж составляет 500 000 SERO. Достигните уровня две звезды и получите 4% от нового дохода в соответствии с рефералом и 2% от нового дохода на том же уровне звезды.

Три звезды В дополнение к самым высоким показателям прямых продаж, общий доход от всех других прямых продаж составляет 1,5 млн. SERO. Достигните уровня «три звезды» и получите 6% нового дохода в соответствии с рекомендациями и 3% нового дохода на том же звездном уровне.

Четыре звезды В дополнение к самым высоким показателям прямых продаж, общий доход от всех других прямых продаж составляет 3 миллиона SERO. Достигните четырехзвездочного уровня и получите 8% нового дохода в соответствии с рекомендациями и 4% нового дохода на том же звездном уровне.

(Примечания: Мгновенный расчет дохода от рефералов и вознаграждения за уровень звезды, есть различия в уровнях и прожиги. Награда за уровень относится ко времени, когда первый уровень той же звезды появляется под линией вниз, вы можете получить новый доход под понижением линия, соответствующая награде Звезды. Пока новый Звездный Уровень не появится в том же нижнем канале, награда Звездного Уровня выигрывает предпоследний Звездный Уровень. Звездные награды уровня и т. д., награда Звездного уровня будет появляться, только если появляется новый уровень .)

5. Технологические услуги занимают 6%

6. Система с открытым исходным кодом, данные находятся в цепочке, код написан, децентрализованный учет, нет бэкдора, не может быть взломан, автоматическая работа, автоматическое распространение.

7. Система показывает правила контракта и коды рекомендаций по умолчанию, и игроки могут активно участвовать без реферера.`,
        }
    };

    ko_KR = {
        project: {
            rule:"规则",
            title: "계약세부",
            contractAddress: "계약 주소",
            balanceSero: "현재 잔액 (SERO)",
        },

        account: {
            title: {
                utxo: "월렛 계정",
                contract: "계약 계정",
                swith: "계정 변경",
                balanceSero: "밸런스 (SERO)",
                estimatedTotal: "총 예상 수익 (SERO)",
                dayIncome: "당일 수익률",
                staticIncome: "고정 수입 (SERO)",
                withdraw: "출금 금액 가능 (SERO)",
                detail: "세부",
                id: "번호",
                referId: "리퍼러 ID",
                areaId: "지역 ID",
                totalInvest: "교장",
                profitLevel: "여러 수입",
                latestTime: "마지막 소득 시간",
                totalReturn: "총 전류 리턴 (SERO)",
                totalReturnDay: "하루에 반환 된 총액 (SERO)",
                recommend: "부하 직원 수",
                staticIncomeTips: "인출 계좌로 지급되는 오늘의 고정 수입",
                staticIncomeTips2: "인출 계좌로 수입 트리거",
                investDetail: "투자세부",
                myIncome: "내 공연",
                areaTotal: "지역 성과",
                areaOtherTotal: "총 실적 (지역 제외)",

                staticReward: "고정 수입",
                recommendReward: "추천 보상",
                nobilityReward: "별 보상",
                vipReward: "VIP 보상",
                viewCode: "스마트 계약서보기",

            },
            button: {
                deposit: "예금",
                invest: "투자",
                trigger: "트리거 수익",
                withdraw: "철수",
                close: "닫기",
                copy: "복사",
            },
            modal: {
                deposit: {
                    title: "예금",
                    copy: "복사",
                },

                invest: {
                    title: "투자",
                    referId: "리퍼러 ID",
                    amount: "투자 금액",
                    amountTips: "10 SERO 시작",
                    availableSERO: "사용 가능한 잔액",
                    total: "총 지불",
                    estimate: "추정 소득",
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                trigger: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                withdraw: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                    tips: "* 출금은 UTXO 계정으로 직접 이루어집니다.",
                },
            },
        },
        toast: {
            lessAmount: "이 거래를 처리하기에 SERO 잔액이 부족합니다.",
            minInvest: "최소 투자 금액은 10 SERO입니다.",
            tx: "트랜잭션 제출 완료, 블록 패키징 트랜잭션 대기 중, 트랜잭션 해시 : ",
            copySuccess: "성공적으로 복사",
            rule:`1. 추천 코드를 사용하여 링크를 참조하고 설정하십시오
 
 
2. 고정 수입
      고정 수입은 해당 날짜에 전체 네트워크의 총 고정 배당으로 매일 총 펀드 계정의 1/13로 분배되어 스마트 계약이 영구적으로 실행되고 첫 익명의 공개 체인의 쾌적한 미래 가치를 누릴 수 있습니다.
단일 계정으로 릴리스 된 고정 수익 SERO 수 = 개인이 반환하지 않은 총 SERO 수 ÷ 전체 네트워크를 통해 반환되지 않은 총 SERO 수 x 총 SERO 수의 1/30 당일 계약 기금 풀에서.

 
 또한 단일 계정의 최대 일일 릴리스는 총 예상 총 매출의 2 천이며, 2 천을 초과하는 부품은 계속해서 계약 주소 계정으로 반환됩니다. 

플레이어 참여 기준 :
 
레벨 A : 10 ≤ X <500 SERO, 고정 + 동적 보너스 3 회 .
레벨 B : 500 ≤ X <5000 SERO, 고정 + 동적 보상 4 회 .
레벨 C : 5000 SERO 이상 , 고정 + 다이나믹 어워드 5 회 .
당신은 할 수 재 초대 하고 추가 자신의 주문을 .
(참고 : 총 예상 수익 = 실제 투자 금액 x 해당 배수) 

3. 추천 수익 : 26 %
a) 1 단계 추천 수익의 10 %와 2 단계 수입의 6 %를 영구적으로 즐기십시오.
 b) 직접 추천을 통해 최대 30,000 SERO의 수익을 올리면 3 차 추천의 추가 수입의 1 % 등을 즐길 수 있습니다. 직접 추천 수익의 10,000 SERO마다, 최대 12 레벨의 추천까지 모든 추가 레벨의 매출의 1 %를 즐길 수 있습니다.
 c) 직접 추천 수익 결과가 b에 설명 된 조건을 충족하지 않는 경우 누적 투자 금액이 10 만 SERO 이상에 도달하면 3 ~ 12 수준 내에서 각 추가 수익의 1 %를 직접받을 수도 있습니다.
d) 추천 소득은 매일 정산되며, 인출 및 재투자가 가능합니다. 
 
4. 경영 상 : 12 %
최고 성과 부서를 제외하고 다른 모든 성과는 합산됩니다. 
 
 
학년    성과     수익 
 
원 스타        최대 직접 판매 실적 외에도 다른 모든 직접 판매의 총 수익은 100,000 SERO입니다.             하나의 스타 수준에 도달하고 추천 다운 라인에서 2 %의 새로운 수익을 얻고 동일한 스타 수준에서 1 %의 새로운 수익을 얻습니다.

두 별                     가장 큰 직접 판매 실적 외에도 다른 모든 직접 판매의 총 수익은 50 만 SERO입니다.                2 개의 스타 수준에 도달하면 추천 다운 라인에서 4 %의 새로운 수익을 얻고 동일한 스타 수준에서 2 %의 새로운 수익을 얻습니다.

쓰리 스타              가장 큰 직접 판매 실적 외에도 다른 모든 직접 판매의 총 수익은 150 만 SERO입니다.                                 3 개의 스타 수준에 도달하고 추천 스타 라인에서 6 %의 새로운 수익을 얻고 동일한 스타의 3 %의 새로운 수익을 얻습니다.

사 별                   최대 직접 판매 실적 외에도 다른 모든 직접 판매의 총 수익은 3 백만 SERO입니다.                    4 개의 스타 수준에 도달하면 추천 다운 라인에서 8 %의 새로운 수익을 얻고 동일한 스타 수준에서 4 %의 새로운 수익을 얻습니다.   

(비고 : 추천 수익 및 스타 레벨 보상의 즉각적인 결제, 레벨 차이 및 화상이 있습니다. 레벨 보너스는 동일한 스타의 첫 번째 레벨이 다운 라인 아래에 나타나는 시간을 나타냅니다. -스타 보너스에 해당하는 라인 : 동일한 다운 라인에 새로운 스타 레벨이 나타날 때까지 두 번째 스타 레벨이 스타 레벨 보너스를받습니다. 스타 레벨 어워드는 새 레벨이 나타날 때만 나타납니다.)

5. 기술 서비스는 6 %를 보유합니다
6. 시스템은 오픈 소스이고, 데이터는 온 체인이며, 코드가 작성되며, 분산 된 회계, 백도어는없고, 조작 할 수 없으며, 자동 조작, 자동 배포가 가능합니다.
7. 시스템은 계약 규칙과 기본 추천 코드를 보여 주며, 플레이어는 리퍼러없이 적극적으로 참여할 수 있습니다.`,
        }
    };

    ja_JP = {
        project: {
            rule:"规则",
            title: "契約詳細",
            contractAddress: "契約住所",
            balanceSero: "現在の残高（SERO）",
        },

        account: {
            title: {
                utxo: "ウォレットアカウント",
                contract: "契約アカウント",
                swith: "アカウントを切り替える",
                balanceSero: "バランス（SERO）",
                estimatedTotal: "推定総収益（SERO）",
                dayIncome: "同日の返品率",
                staticIncome: "毎日の静的収入（SERO）",
                withdraw: "引き出し可能な現金（SERO）",
                detail: "細部",
                id: "数",
                referId: "リファラーID",
                areaId: "地域ID",
                totalInvest: "主要な",
                profitLevel: "複数の収益",
                latestTime: "最新の収益時間",
                totalReturn: "返品合計（SERO）",
                totalReturnDay: "当日のトータルリターン（SERO）",
                recommend: "紹介の数",
                staticIncomeTips: "今日の静的収益は引き出し口座に支払われました",
                staticIncomeTips2: "引き出し口座に収益をトリガー",
                investDetail: "投資の詳細",
                myIncome: "私のパフォーマンス",
                areaTotal: "地区のパフォーマンス",
                areaOtherTotal: "パフォーマンスの合計（地域を除く）",

                staticReward: "静的リターン",
                recommendReward: "紹介報酬",
                nobilityReward: "スター賞",
                vipReward: "VIP報酬",
                viewCode: "スマートコントラクトを表示",

            },
            button: {
                deposit: "預り金",
                invest: "投資",
                trigger: "トリガー収益",
                withdraw: "引き出す",
                close: "閉じる",
                copy: "複写",
            },
            modal: {
                deposit: {
                    title: "預り金",
                    copy: "複写",
                },

                invest: {
                    title: "投資",
                    referId: "リファラーID",
                    amount: "投資額",
                    amountTips: "10 SERO開始",
                    availableSERO: "利用可能残高",
                    total: "お支払い総額",
                    estimate: "推定収入",
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                trigger: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                withdraw: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                    tips: "※引き出しはUTXO口座に直接行われます。",
                },
            },
        },
        toast: {
            lessAmount: "SERO残高はこのトランザクションをカバーするのに十分ではありません。",
            minInvest: "最小投資額は10 SEROです。",
            tx: "トランザクション送信が成功し、ブロックパッケージングトランザクションを待機しています、トランザクションハッシュ： ",
            copySuccess: "正常にコピーされました",
            rule:`1.紹介コードを使用して、リンク関係を招待し、確立します。
2. 固定収入  
固定収入は、その日のネットワーク全体の固定配当の合計として、毎日合計ファンドアカウントの1/30に分配され、スマートコントラクトが永続的に実行され、最初の匿名のパブリックチェーンの快適な将来価値を享受します。
1つのアカウントにリリースされた固定収益SEROの数=個人から返されなかったSEROの総数÷
 ネットワーク全体で返されなかったSEROの総数x当日の契約資金プールでのSEROの総数の1/30
さらに、個人口座の最大日次リリースは、予想される総収入の2千分の1であり、超過分は引き続き契約資金プール口座に戻されます。
プレイヤーの参加基準：   
 
レベルA：10≤X <500 SERO、固定+ 動的ボーナス3 回。        
レベルB：500≤X <5000 SERO、固定+ 動的補償4 回。        
レベルC：5000 SERO 以上、固定+ ダイナミック賞5 回。      
あなたはすることができ、再招待して追加自分の注文を。         

（注：推定総収益=実際の投資額X対応する倍数） 

3.紹介収入：26％
a）第1レベルの紹介の収益の10％、第2レベルの紹介の6％を永続的に享受する。
 b）直接紹介で最大30,000 SEROの収益を獲得し、第3レベルの紹介の追加収益の1％を享受できます。直接紹介収入の10,000 SEROごとに、12レベルまでの紹介の追加レベルごとに1％の収入を享受できます。
 c）直接紹介収益の結果がbに記載された条件を満たさない場合、累積投資額が10万SERO以上に達した場合、3〜12レベル内で追加収益の1％を直接受け取ることもできます。
d）紹介収入は毎日決済され、引き出し可能で、再投資可能です。

4.経営賞：12％
最高のパフォーマンスを除いて、他のすべての収益結果が合計されます。





レベル      パフォーマンス     収益


一つ星      最大の直接販売実績に加えて、他のすべての直接販売の合計収益は100,000 SEROです。                                       1つ星レベルに到達し、紹介のダウンラインの下で新しい収益の2％を獲得し、同じ星レベルで新しい収益の1％を獲得する

二つ星                 最大の直接販売実績に加えて、他のすべての直接販売の合計収益は500,000 SEROです。                            2つ星レベルに到達し、紹介のダウンラインの下で新しい収益の4％を獲得し、同じ星レベルで新しい収益の2％を獲得します。

三つ星         最大の直接販売実績に加えて、他のすべての直接販売の合計収益は150万SEROです。\t                        3つ星レベルに到達し、紹介のダウンラインで新しい収益の6％と同じスターレベルで新しい収益の3％を獲得します。

四つ星          最大の直接販売実績に加えて、他のすべての直接販売の合計収益は300万SEROです。                     
                                   4つ星レベルに到達し、紹介のダウンラインの下で新しい収益の8％を獲得し、同じ星レベルで新しい収益の4％を獲得します。  


（備考：紹介収入とスターレベルの報酬の即時決済、レベルの違いと火傷があります。レベルアワードは、同じスターの最初のレベルがダウンラインの下に表示される時間を指しますが、ダウンの下で新しい収入を得ることができます-スターアワードに対応する行。同じダウンラインに新しいスターレベルが表示されるまで、スターレベルアワードは最後から2番目のスターレベルによって獲得されます。スターレベルアワードは同様に、新しいレベルが表示された場合にのみ表示されます。 ）

5.テクノロジーサービスは6％
6.システムはオープンソースで、データはチェーン上にあり、コードは記述され、分散会計、バックドアなし、改ざんできない、自動操作、自動配布。
7.システムには契約ルールとデフォルトの推奨コードが表示され、プレーヤーはリファラーなしで積極的に参加できます。`,
        }
    };
}

export default Lang