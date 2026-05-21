import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Award, Search, CheckCircle, ArrowRight, FileText, Calendar, HelpCircle } from 'lucide-react';

export default function DentalPlusLP() {
  const [activeTab, setActiveTab] = useState('plus');

  return (
    <div className="min-h-screen bg-[#f7f3f4] text-[#6b7280] font-sans antialiased selection:bg-[#d97b8d] selection:text-white">
      
      {/* 医療機関向けプレミアムヘッダー */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#6b7280]/10 px-4 py-3 sm:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs tracking-widest text-[#6b7280]/80 uppercase">Medical Net Group</span>
          <span className="text-lg font-bold tracking-tight text-gray-900">矯正歯科ネット<span className="text-[#d97b8d] ml-1 font-extrabold">PLUS</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#problem" className="hover:text-[#d97b8d] transition-colors">お悩み</a>
          <a href="#strategy" className="hover:text-[#d97b8d] transition-colors">集患戦略</a>
          <a href="#strengths" className="hover:text-[#d97b8d] transition-colors">4つの強み</a>
          <a href="#comparison" className="hover:text-[#d97b8d] transition-colors">他施策比較</a>
        </div>
        <a href="#cta-section" className="bg-[#d97b8d] hover:bg-[#d97b8d]/90 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all transform hover:scale-105 shadow-md shadow-[#d97b8d]/20">
          無料相談・資料請求
        </a>
      </header>

      {/* FV (ヒーローセクション) */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 sm:pb-28 border-b border-[#6b7280]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center space-x-2 bg-[#f7f3f4] border border-[#d97b8d]/30 text-[#d97b8d] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                <span>独立開業歯科医師向け・次世代集患インフラ</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.25]">
                ポータルや自院HPで<br className="hidden sm:inline"/>
                <span className="text-[#d97b8d] underline decoration-wavy decoration-1 underline-offset-8">「比較・天秤」にかけられる前に。</span><br/>
                <span className="text-2xl sm:text-3xl lg:text-4xl mt-2 block font-medium text-gray-700">
                  AI・地域検索から「指名買い」される記事型メディア戦略
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl leading-relaxed">
                患者は「どこが良いか」ではなく、「どんな医院があるか」をまず探しています。
                価格競争や立地比較に巻き込まれる前段階で、患者の認知と信頼を独占する。それが『矯正歯科ネットPLUS』です。
              </p>
              
              {/* FV内ダブルCVボタン */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a href="#cta-section" className="flex-1 sm:flex-none text-center bg-[#d97b8d] hover:bg-[#d97b8d]/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#d97b8d]/30 transition-all flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>無料オンライン相談・資料請求</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#cases" className="flex-1 sm:flex-none text-center bg-white border border-gray-300 hover:border-[#d97b8d] text-gray-700 hover:text-[#d97b8d] font-semibold px-6 py-4 rounded-xl transition-all flex items-center justify-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>掲載事例集を見る</span>
                </a>
              </div>
              <p className="text-xs text-gray-400">※1分で入力完了。強引な掲載営業は一切ございません。</p>
            </div>
            
            {/* FVイメージダミー（プレースホルダー） */}
            <div className="lg:col-span-5 relative">
              <div className="w-full h-72 sm:h-96 rounded-2xl bg-gradient-to-tr from-[#f7f3f4] to-white border border-gray-200 shadow-xl flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-md text-xs font-mono border border-gray-100">AI-Powered & SEO</div>
                <div className="space-y-4 w-full">
                  <div className="h-4 bg-[#d97b8d]/20 rounded w-2/3"></div>
                  <div className="h-10 bg-[#d97b8d]/10 rounded w-full flex items-center px-3 text-xs text-[#d97b8d] font-bold">★ ChatGPT / Gemini 引用実績対応</div>
                  <div className="h-24 bg-white rounded-lg border border-gray-100 shadow-sm p-3 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 【2】共感セクション */}
      <section id="problem" className="py-20 bg-[#f7f3f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#d97b8d] font-bold">Do you have these problems?</h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">先生、ネット集患でこんな「限界」を感じていませんか？</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "ポータルでの激しい価格競争", desc: "高い掲載料を払っても、他院と並列で並べられ、結局「安さ」や「利便性」だけで天秤にかけられる。" },
              { title: "不安定な自院SEO・アルゴリズム", desc: "SEO対策を外注しても、Googleコアアップデートのたびに順位が乱高下し、自院HPへの流入が安定しない。" },
              { title: "PPC広告費の高騰・依存", desc: "広告を止めると新患が途絶える。しかし、クリック単価（CPC）は競合参入により年々上がり続けている。" },
              { title: "自院の『本当の強み』が届かない", desc: "インビザラインや高度矯正の技術、丁寧なカウンセリング力をアピールしたいが、スペック表のようなWeb画面では伝わらない。" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex items-start space-x-4">
                <div className="bg-[#f7f3f4] text-[#d97b8d] p-2 rounded-lg font-bold text-sm">0{idx+1}</div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6b7280]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white/60 border border-gray-200 p-6 rounded-xl">
            <p className="text-base font-medium text-gray-800">
              これらは先生の技術の問題ではありません。Web上での<span className="text-[#d97b8d] font-bold">「患者との出会い方（導線設計）」</span>が、すべて比較前提になってしまっていることが原因です。
            </p>
          </div>
        </div>
      </section>

      {/* 【3】患者行動変化＆【4】PLUSとは */}
      <section id="strategy" className="py-20 bg-white border-y border-[#6b7280]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#d97b8d] bg-[#f7f3f4] px-3 py-1 rounded-full">THE PARADIGM SHIFT</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              患者は「比較する前」に、<br className="sm:hidden"/>すでに医院を決めている。
            </h2>
            <p className="text-sm sm:text-base text-[#6b7280] max-w-2xl mx-auto">
              スマートフォンの普及とAI検索の台頭により、現代の患者の意思決定ルートは劇的に変化しました。
            </p>
          </div>

          {/* 切り替えタブ付き図解UX */}
          <div className="bg-[#f7f3f4] p-2 rounded-xl flex max-w-md mx-auto mb-10">
            <button 
              onClick={() => setActiveTab('traditional')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'traditional' ? 'bg-white text-gray-900 shadow' : 'text-gray-400 hover:text-gray-600'}`}
            >
              従来型（スペック比較）
            </button>
            <button 
              onClick={() => setActiveTab('plus')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'plus' ? 'bg-[#d97b8d] text-white shadow' : 'text-gray-400 hover:text-gray-600'}`}
            >
              次世代PLUS型（指名獲得）
            </button>
          </div>

          <div className="bg-[#f7f3f4]/50 border border-gray-200 rounded-2xl p-6 sm:p-10">
            {activeTab === 'traditional' ? (
              <div className="space-y-6">
                <div className="text-center text-sm font-bold text-gray-500 mb-4">【従来】他院と横並びで削り合うルート</div>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div className="bg-white border border-gray-300 p-4 rounded-xl text-center w-full md:w-1/4 text-sm font-semibold">地域名×矯正で検索</div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-white border border-red-200 p-4 rounded-xl text-center w-full md:w-1/4 text-sm font-semibold text-red-500 bg-red-50/50">ポータルで一括比較<br/><span className="text-xs font-normal text-gray-500">（価格・駅チカ重視）</span></div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-white border border-gray-300 p-4 rounded-xl text-center w-full md:w-1/4 text-sm font-semibold">他の一番安い医院へ</div>
                </div>
                <p className="text-xs text-center text-red-500 pt-4">※自院の強みが読まれる前に、スペックの差だけで離脱されてしまいます。</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center text-sm font-bold text-[#d97b8d] mb-4">【現在】比較される前に「認知・教育」を完了するルート</div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-xs font-bold text-[#d97b8d] block mb-1">STEP 01</span>
                    <span className="text-sm font-bold text-gray-900">AI・エリア検索</span>
                    <p className="text-xs text-gray-400 mt-1">ChatGPTや地域記事へ自然に露出</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-2 border-[#d97b8d] shadow-md bg-gradient-to-b from-white to-[#f7f3f4]">
                    <span className="text-xs font-bold text-[#d97b8d] block mb-1">STEP 02</span>
                    <span className="text-sm font-bold text-gray-900">PLUS第三者記事</span>
                    <p className="text-xs text-[#d97b8d] font-medium mt-1">客観的情報として読まれ信頼獲得</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-xs font-bold text-[#d97b8d] block mb-1">STEP 03</span>
                    <span className="text-sm font-bold text-gray-900">自院HPへ誘導</span>
                    <p className="text-xs text-gray-400 mt-1">「この先生が良い」という指名状態</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm bg-gray-900 text-white">
                    <span className="text-xs font-bold text-[#d97b8d] block mb-1">GOAL</span>
                    <span className="text-sm font-bold">質の高いCV</span>
                    <p className="text-xs text-gray-300 mt-1">天秤にかけられない成約前提の問い合わせ</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 【5】PLUSの4つの強み */}
      <section id="strengths" className="py-20 bg-[#f7f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[#d97b8d] font-bold font-mono">4 Core Strengths</h2>
            <p className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              なぜ、矯正歯科ネットPLUSは<br/>価格競争を無効化できるのか？
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6 text-[#d97b8d]" />,
                title: "AI検索（ChatGPT/Gemini）の回答根拠としての引用実績",
                desc: "最新のAI検索エンジンは、Web上の「客観的な記事」を信頼性の高い情報源として学習・引用します。PLUSの構造化された専門記事は、AI回答内に貴院の名前が埋め込まれる確度を飛躍的に高めます。"
              },
              {
                icon: <Award className="w-6 h-6 text-[#d97b8d]" />,
                title: "市区町村・駅単位を網羅するエリアSEO面展開",
                desc: "広域なキーワードだけでなく、「◯◯駅 インビザライン」「◯◯区 子ども 矯正」など、患者が実際に住む生活圏に特化した記事を高密度に展開。ターゲットエリアの検索面を面で制圧します。"
              },
              {
                icon: <Shield className="w-6 h-6 text-[#d97b8d]" />,
                title: "広告感を徹底的に排除した「第三者視点」の記事信頼",
                desc: "自院のサイトで強みを語る「自画自賛（広告）」は、患者の心理的防衛線に阻まれます。医療専門のメディアによる客観的なレポート記事だからこそ、患者は情報として素直に受け入れます。"
              },
              {
                icon: <Smartphone className="w-6 h-6 text-[#d97b8d]" />,
                title: "スマホ閲覧に特化した「縦型ストーリーUX設計」",
                desc: "スマホユーザーの離脱を徹底防衛するため、流れるようなスクロールで完読させる雑誌風の構成を採用。記事の最後まで自然に読み進めさせ、予約・自院HPへのリンクへと誘導します。"
              }
            ].map((strength, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#f7f3f4] flex items-center justify-center">
                  {strength.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">{strength.title}</h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 【6】記事が資産になる説明 */}
      <section className="py-20 bg-white border-b border-[#6b7280]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            「掛け捨ての広告費」を、毎月積み上がる「集患資産」へ。
          </h2>
          <p className="text-base text-[#6b7280] max-w-2xl mx-auto mb-10 leading-relaxed">
            一般的なPPC広告（リスティング広告）は、出費を止めた瞬間に露出が完全に消滅します。
            しかし、PLUSで構築する取材記事はWeb上に蓄積され続けるため、運用期間が長くなるほどドメインの信頼性と検索露出が強化され、中長期の集患コスト効率（CPA）を高め続けます。
          </p>
          
          {/* シンプルな視覚的対比図 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="border border-gray-200 p-6 rounded-xl bg-[#f7f3f4]/30">
              <span className="text-xs font-bold text-gray-400 block mb-2">● 一般的なWeb広告</span>
              <div className="font-bold text-gray-800 text-sm">予算投入時のみ露出、競合参入で単価高騰</div>
              <div className="mt-4 h-2 bg-red-200 rounded-full w-full overflow-hidden">
                <div className="bg-red-400 h-full w-1/3"></div>
              </div>
              <span className="text-xs text-red-500 mt-2 block">→ 資産として残らない</span>
            </div>
            <div className="border-2 border-[#d97b8d] p-6 rounded-xl bg-white shadow-sm">
              <span className="text-xs font-bold text-[#d97b8d] block mb-2">● 矯正歯科ネットPLUSの記事</span>
              <div className="font-bold text-gray-900 text-sm">公開後もWeb上に残り、インデックスが積み上がる</div>
              <div className="mt-4 h-2 bg-[#d97b8d]/20 rounded-full w-full overflow-hidden">
                <div className="bg-[#d97b8d] h-full w-full"></div>
              </div>
              <span className="text-xs text-[#d97b8d] font-bold mt-2 block">→ 長期的な集患インフラに成長</span>
            </div>
          </div>
        </div>
      </section>

      {/* 【9】他施策比較（プレミアム比較表） */}
      <section id="comparison" className="py-20 bg-[#f7f3f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">各集患施策とのポジショニング比較</h2>
            <p className="text-sm text-[#6b7280]">「比較される前段階の認知」から資産化までカバーするPLUSの優位性</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700">
                  <th className="p-4 sm:p-5">施策</th>
                  <th className="p-4 sm:p-5">比較前認知</th>
                  <th className="p-4 sm:p-5">第三者信頼度</th>
                  <th className="p-4 sm:p-5">AI検索親和性</th>
                  <th className="p-4 sm:p-5">長期資産性</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 font-medium">
                {[
                  { name: "PPC（リスティング広告）", t1: "× (比較前提)", t2: "△ (広告感)", t3: "×", t4: "× (掛け捨て)" },
                  { name: "自院サイト独自SEO", t1: "△ (順位不安定)", t2: "△ (自言自賛)", t3: "◯", t4: "◯" },
                  { name: "従来型一括ポータル", t1: "× (過密横並び)", t2: "△", t3: "×", t4: "×" },
                ].map((row, idx) => (
                  <tr key={idx} className="text-gray-600">
                    <td className="p-4 sm:p-5 font-bold text-gray-900">{row.name}</td>
                    <td className="p-4 sm:p-5">{row.t1}</td>
                    <td className="p-4 sm:p-5">{row.t2}</td>
                    <td className="p-4 sm:p-5">{row.t3}</td>
                    <td className="p-4 sm:p-5">{row.t4}</td>
                  </tr>
                ))}
                <tr className="bg-[#f7f3f4]/40 font-bold text-gray-900">
                  <td className="p-4 sm:p-5 text-[#d97b8d]">矯正歯科ネットPLUS</td>
                  <td className="p-4 sm:p-5 text-[#d97b8d]">◎ (独占認知)</td>
                  <td className="p-4 sm:p-5 text-[#d97b8d]">◎ (記者取材)</td>
                  <td className="p-4 sm:p-5 text-[#d97b8d]">◎ (引用実績有)</td>
                  <td className="p-4 sm:p-5 text-[#d97b8d]">◎ (蓄積型)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 【12】最終案内 ＆ お問い合わせフォーム */}
      <section id="cta-section" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">「比較される医院」から、“選ばれる医院”へ。</h2>
            <p className="text-sm sm:text-base text-[#6b7280] max-w-xl mx-auto">
              今後の矯正歯科集患を見据えるなら、まずは一度、貴院の診療圏（エリア）の競合調査を含めた活用方法をご相談ください。
            </p>
          </div>

          {/* コンバージョン最適化フォーム */}
          <div className="bg-white border-2 border-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl">
            <div className="text-center mb-6">
              <span className="text-sm font-bold text-gray-900 bg-[#f7f3f4] px-4 py-2 rounded-md inline-block">
                無料オンライン相談 ・ 資料請求お申し込み
              </span>
            </div>
            
            <form className="space-y-5 text-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-bold text-gray-800 mb-2">医院名 <span className="text-[#d97b8d]">※</span></label>
                <input type="text" placeholder="例：メディカル歯科クリニック" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97b8d]/50 focus:border-[#d97b8d]" required />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">お名前（歯科医師・代表者様） <span className="text-[#d97b8d]">※</span></label>
                <input type="text" placeholder="例：山田 太郎" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97b8d]/50 focus:border-[#d97b8d]" required />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">メールアドレス <span className="text-[#d97b8d]">※</span></label>
                <input type="email" placeholder="例：doctor@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97b8d]/50 focus:border-[#d97b8d]" required />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-2">ご希望の項目 <span className="text-[#d97b8d]">※</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#f7f3f4]/50">
                    <input type="radio" name="purpose" className="text-[#d97b8d] focus:ring-[#d97b8d]" defaultChecked />
                    <span className="font-medium text-gray-700">詳しい資料がほしい</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#f7f3f4]/50">
                    <input type="radio" name="purpose" className="text-[#d97b8d] focus:ring-[#d97b8d]" />
                    <span className="font-medium text-gray-700">オンラインで個別相談したい</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-[#d97b8d] hover:bg-[#d97b8d]/90 text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-[#d97b8d]/30 transition-all flex items-center justify-center space-x-2">
                  <span>この内容で無料診断・資料請求する</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">※プライバシーポリシーに基づき、ご入力情報は厳重に管理されます。</p>
            </form>
          </div>
        </div>
      </section>

      {/* スマートフォン専用・画面最下部固定（フローティング）CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-2 grid grid-cols-2 gap-2 md:hidden shadow-2xl">
        <a href="#cta-section" className="bg-white border border-gray-300 text-gray-800 font-bold py-3 rounded-lg text-xs flex items-center justify-center space-x-1">
          <FileText className="w-4 h-4 text-[#d97b8d]" />
          <span>資料請求</span>
        </a>
        <a href="#cta-section" className="bg-[#d97b8d] text-white font-bold py-3 rounded-lg text-xs flex items-center justify-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>無料エリア診断</span>
        </a>
      </div>

    </div>
  );
}
