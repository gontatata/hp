# 合同会社ＣｈａｎｇｅＬｅａｐ - 公式ウェブサイト

未来を創造するテクノロジーパートナー、合同会社ＣｈａｎｇｅＬｅａｐの公式ウェブサイトです。

## 技術スタック

- React 19
- Vite
- React Bootstrap
- React Router DOM

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## GitHub Pages へのデプロイ

### 1. 必要なパッケージのインストール

```bash
npm install --save-dev gh-pages
```

### 2. GitHub リポジトリの作成

1. GitHub で新しいリポジトリを作成（例: `myhp`）
2. ローカルリポジトリを GitHub にプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/myhp.git
git push -u origin main
```

### 3. GitHub Pages の設定

1. GitHub リポジトリの設定ページに移動
2. "Pages"セクションで以下を設定：
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"

### 4. デプロイの実行

```bash
npm run deploy
```

### 5. カスタムドメインの設定（オプション）

GitHub Pages の設定でカスタムドメインを設定できます。

## サイト構成

- **ホーム**: 会社概要とメインメッセージ
- **導入事例**: 過去のプロジェクトと成果
- **会社概要**: 詳細な会社情報

## ライセンス

このプロジェクトは合同会社ＣｈａｎｇｅＬｅａｐの所有物です。
