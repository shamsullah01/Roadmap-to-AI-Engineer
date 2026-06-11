export const STAGES = [
  {
    id: "foundations",
    index: "01",
    weeks: "5–6 weeks",
    title: "Programming foundations",
    blurb:
      "Everything downstream is written in Python. Get fluent enough that syntax never slows your thinking.",
    topics: [
      {
        id: "py",
        name: "Python fluency",
        why: "Functions, classes, typing, comprehensions — the daily driver.",
        learn: [
          {
            t: "Core data types",
            d: "Python's building blocks are numbers (int, float), text (str), and three containers: list (ordered, changeable), dict (key to value), and set (unique items).",
            code: `nums = [1, 2, 3]                  # list
user = {"name": "Ada", "age": 36} # dict
seen = {1, 2, 3}                  # set, no duplicates`,
          },
          {
            t: "Functions & arguments",
            d: "def defines a function. Arguments can have defaults, and *args / **kwargs capture any extra positional and keyword arguments.",
            code: `def greet(name, greeting="Hi"):
    return f"{greeting}, {name}!"

greet("Ada")                  # "Hi, Ada!"
greet("Ada", greeting="Hello")`,
          },
          {
            t: "Classes & objects",
            d: "A class bundles data and behaviour. __init__ runs when an object is created, and self refers to that instance.",
            code: `class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} says woof"

Dog("Rex").speak()`,
          },
          {
            t: "Comprehensions",
            d: "A compact way to build a list, dict, or set from an iterable, with optional filtering — clearer and faster than a manual loop.",
            code: `squares = [n * n for n in range(5)]      # [0, 1, 4, 9, 16]
evens = [n for n in range(10) if n % 2 == 0]`,
          },
          {
            t: "Type hints",
            d: "Optional annotations that document the types a function expects and returns. They power editor autocomplete and static checkers like mypy.",
            code: `def add(a: int, b: int) -> int:
    return a + b`,
          },
          {
            t: "Handling errors",
            d: "Wrap risky code in try/except so a failure doesn't crash everything. finally always runs, and you raise your own errors with raise.",
            code: `try:
    value = int(user_input)
except ValueError:
    print("not a number")`,
          },
        ],
      },
      {
        id: "git",
        name: "Git & GitHub",
        why: "Every team and every portfolio project runs through version control.",
        learn: [
          {
            t: "Staging & commits",
            d: "Git records snapshots of your project. You stage the changes you want with git add, then save them as a commit with a message.",
            code: `git add .
git commit -m "Add login form"`,
          },
          {
            t: "Branches",
            d: "A branch is an isolated line of work, so experiments don't touch the main code. Create one, do your work, then merge it back.",
            code: `git switch -c feature/login
# ...make changes...
git switch main
git merge feature/login`,
          },
          {
            t: "Remotes: push & pull",
            d: "A remote is a copy of the repo on a server like GitHub. push sends your commits up; pull brings other people's commits down.",
            code: `git push origin main
git pull origin main`,
          },
          {
            t: "Pull requests",
            d: "On GitHub you push a branch and open a pull request — a place to review, discuss, and run checks on changes before they merge into main.",
          },
          {
            t: "Resolving conflicts",
            d: "When two branches edit the same lines, Git marks the conflict with <<<<<<<, =======, and >>>>>>>. Edit the file to keep what you want, then add and commit.",
          },
        ],
      },
      {
        id: "dsa",
        name: "Data structures & algorithms",
        why: "Enough to reason about cost — not competitive programming.",
        learn: [
          {
            t: "Lists & arrays",
            d: "A list stores items in order. Reading by index is instant (O(1)), but searching for a value means scanning the whole thing (O(n)).",
            code: `items = [10, 20, 30]
items[0]        # 10  — instant
30 in items     # scans the list`,
          },
          {
            t: "Dicts & hashing",
            d: "A dict maps keys to values using a hash table, so lookup, insert, and delete are O(1) on average. Reach for it whenever you need fast 'find by key'.",
            code: `ages = {"ada": 36}
ages["ada"]     # 36 — instant lookup`,
          },
          {
            t: "Stacks & queues",
            d: "A stack is last-in-first-out (append/pop). A queue is first-in-first-out — use collections.deque so removing from the front stays fast.",
            code: `from collections import deque
q = deque()
q.append(1)     # add to back
q.popleft()     # remove from front`,
          },
          {
            t: "Big-O notation",
            d: "Big-O describes how cost grows with input size n: O(1) constant, O(log n) logarithmic, O(n) linear, O(n^2) quadratic. The goal is to avoid nested loops over large data.",
          },
          {
            t: "Recursion",
            d: "A function that calls itself, with a base case that stops it. Natural for trees and divide-and-conquer problems.",
            code: `def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)`,
          },
        ],
      },
      {
        id: "env",
        name: "Environments & debugging",
        why: "venvs, pip, breakpoints. Saves you hundreds of hours later.",
        learn: [
          {
            t: "Virtual environments",
            d: "A venv isolates a project's packages so versions from one project never clash with another. Make one per project.",
            code: `python -m venv .venv
source .venv/bin/activate     # Windows: .venv\\Scripts\\activate`,
          },
          {
            t: "Installing packages",
            d: "pip installs packages. Freeze the exact versions into requirements.txt so anyone (including future you) can reproduce the setup.",
            code: `pip install requests
pip freeze > requirements.txt`,
          },
          {
            t: "Using a debugger",
            d: "Drop breakpoint() into your code and run it. You get an interactive prompt to inspect variables and step line by line — far better than guessing.",
          },
          {
            t: "Reading tracebacks",
            d: "Read a traceback from the bottom up: the last line is the error type and message; the lines above show the chain of calls that led there.",
          },
          {
            t: "Logging over print",
            d: "Use the logging module instead of print. You get levels (debug, info, warning, error) and can turn detail up or down without editing code.",
            code: `import logging
logging.basicConfig(level=logging.INFO)
logging.info("started")`,
          },
        ],
      },
    ],
  },
  {
    id: "math",
    index: "02",
    weeks: "4–5 weeks",
    title: "Math that actually matters",
    blurb:
      "You need working intuition, not proofs. Each of these maps directly onto something a model does.",
    topics: [
      {
        id: "linalg",
        name: "Linear algebra",
        why: "Vectors and matrix multiplication are what a neural net is.",
        learn: [
          {
            t: "Vectors",
            d: "A vector is an ordered list of numbers — a point or direction in space. In ML a data row, or a word embedding, is just a vector.",
            code: `import numpy as np
v = np.array([1.0, 2.0, 3.0])`,
          },
          {
            t: "Matrices",
            d: "A matrix is a 2-D grid of numbers (rows by columns). A dataset is a matrix; so are the weights of a neural-network layer.",
            code: `W = np.array([[1, 2],
              [3, 4]])`,
          },
          {
            t: "Matrix multiplication",
            d: "The core operation of a neural net. To multiply A by B the inner dimensions must match: (m x n) times (n x p) gives (m x p).",
            code: `A @ B        # numpy matrix multiply`,
          },
          {
            t: "Dot product",
            d: "Multiply two vectors element-wise and sum the result. It measures how aligned they are — the basis of similarity and of attention.",
            code: `np.dot(a, b)`,
          },
          {
            t: "Transpose & inverse",
            d: "Transpose flips rows and columns (written A.T). The inverse undoes a matrix's transformation — though not every matrix has one.",
          },
        ],
      },
      {
        id: "calc",
        name: "Calculus & gradients",
        why: "The chain rule is the whole trick behind backpropagation.",
        learn: [
          {
            t: "Derivatives",
            d: "A derivative is the slope of a function — how fast the output changes as the input changes. A slope of zero means a flat spot: a minimum or maximum.",
          },
          {
            t: "The chain rule",
            d: "To differentiate nested functions f(g(x)), multiply the outer derivative by the inner one. This is exactly how gradients flow backward through a network's layers.",
          },
          {
            t: "Partial derivatives",
            d: "When a function has many inputs, a partial derivative measures how the output changes with respect to one input while the others stay fixed.",
          },
          {
            t: "Gradients",
            d: "The gradient is the vector of all partial derivatives. It points in the direction of steepest increase, so training steps move the opposite way — downhill.",
          },
          {
            t: "Why this powers backprop",
            d: "Backpropagation applies the chain rule from the loss backward to every weight, producing the gradient that the optimizer then uses to update them.",
          },
        ],
      },
      {
        id: "prob",
        name: "Probability & statistics",
        why: "Distributions, sampling, and why your eval numbers move.",
        learn: [
          {
            t: "Distributions",
            d: "A distribution says how likely each value is. The normal (bell curve) shows up everywhere; uniform is flat; Bernoulli is a single coin flip.",
          },
          {
            t: "Mean & variance",
            d: "The mean is the average. Variance — and its square root, the standard deviation — measures how spread out the values are around that mean.",
          },
          {
            t: "Conditional probability & Bayes",
            d: "P(A given B) is the chance of A once you know B happened. Bayes' rule flips a known conditional into the one you want: P(A|B) = P(B|A) P(A) / P(B).",
          },
          {
            t: "Sampling",
            d: "We rarely see all the data, so we work with samples. Estimates from a sample wobble around the truth — and larger samples wobble less.",
          },
          {
            t: "Expectation",
            d: "The expected value is the long-run average of a random outcome, weighting each possible value by its probability.",
          },
        ],
      },
      {
        id: "opt",
        name: "Optimization basics",
        why: "Loss landscapes, learning rates, and why training diverges.",
        learn: [
          {
            t: "Loss functions",
            d: "A loss measures how wrong the model is — mean squared error for regression, cross-entropy for classification. Training is the search for weights that minimise it.",
          },
          {
            t: "Gradient descent",
            d: "Compute the gradient of the loss, then nudge the weights a little in the downhill direction. Repeat thousands of times.",
            code: `w = w - learning_rate * gradient`,
          },
          {
            t: "Learning rate",
            d: "The size of each step, and the single most important knob. Too large and training overshoots or diverges; too small and it crawls.",
          },
          {
            t: "Minima & convexity",
            d: "A convex loss has one global minimum. Deep networks are non-convex with many minima and saddle points, but in practice the ones you land in are usually good enough.",
          },
          {
            t: "SGD vs batch",
            d: "Batch gradient descent uses all data per step (accurate but slow). Stochastic / mini-batch uses a small sample (noisy but fast) and is what's actually used.",
          },
        ],
      },
    ],
  },
  {
    id: "ml",
    index: "03",
    weeks: "6–8 weeks",
    title: "Classic machine learning",
    blurb:
      "Deep learning makes more sense after you've trained models you can fully inspect and explain.",
    topics: [
      {
        id: "pandas",
        name: "NumPy, pandas, scikit-learn",
        why: "The workbench. Load, clean, fit, score — fast.",
        learn: [
          {
            t: "NumPy arrays",
            d: "NumPy gives you fast, vectorized arrays — operate on a whole array at once instead of looping in Python.",
            code: `import numpy as np
np.array([1, 2, 3]) * 2     # [2, 4, 6]`,
          },
          {
            t: "pandas DataFrames",
            d: "A DataFrame is a table with labelled columns. Load a CSV, filter rows, and group in a couple of lines.",
            code: `import pandas as pd
df = pd.read_csv("data.csv")
df[df["age"] > 30].groupby("city")["age"].mean()`,
          },
          {
            t: "Cleaning data",
            d: "Real data is messy. Handle missing values with fillna or dropna, fix column types, and remove duplicates before you model anything.",
          },
          {
            t: "The scikit-learn API",
            d: "Every model has the same shape: create it, call fit(X, y) to train, call predict(X) to use it. Learn it once and it transfers everywhere.",
            code: `from sklearn.linear_model import LogisticRegression
model = LogisticRegression().fit(X_train, y_train)
model.predict(X_test)`,
          },
          {
            t: "Train/test split",
            d: "Hold back part of the data so you can measure performance on examples the model has never seen.",
            code: `from sklearn.model_selection import train_test_split
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)`,
          },
        ],
      },
      {
        id: "models",
        name: "Regression & classification",
        why: "Linear models, trees, gradient boosting. Still wins on tabular data.",
        learn: [
          {
            t: "Linear & logistic regression",
            d: "Linear regression predicts a number; logistic regression predicts a probability for classification. Both fit a weighted sum of the features.",
          },
          {
            t: "Decision trees",
            d: "A tree asks a series of yes/no questions about the features to split data into purer groups. Easy to read, but a single tree overfits.",
          },
          {
            t: "Random forests",
            d: "Train many trees on random subsets of the data and average them. Far more robust and accurate than one tree alone.",
          },
          {
            t: "Gradient boosting",
            d: "Build trees one after another, each correcting the previous one's errors. XGBoost and LightGBM win most tabular-data problems.",
          },
          {
            t: "Choosing a model",
            d: "Start with a simple linear model for a baseline, reach for gradient boosting on tabular data, and keep the simplest model that clears your accuracy bar.",
          },
        ],
      },
      {
        id: "eval",
        name: "Evaluation & validation",
        why: "Train/test splits, cross-validation, and metrics beyond accuracy.",
        learn: [
          {
            t: "Train / validation / test",
            d: "Train fits the model, validation tunes your choices, and test gives one honest final score. Never tune anything on the test set.",
          },
          {
            t: "Cross-validation",
            d: "Split the data into k folds, train on k-1 and validate on the rest, rotate through, and average. It uses data efficiently and reduces luck.",
          },
          {
            t: "Precision vs recall",
            d: "Precision: of the items you flagged, how many were right. Recall: of all the real positives, how many you caught. F1 balances the two.",
          },
          {
            t: "ROC & AUC",
            d: "The ROC curve plots true-positive against false-positive rate across thresholds; AUC sums it up in one number (0.5 is random, 1.0 is perfect).",
          },
          {
            t: "Confusion matrix",
            d: "A small table of true and false positives and negatives. Every classification metric is computed from it.",
          },
        ],
      },
      {
        id: "features",
        name: "Feature engineering",
        why: "Where most real-world model quality actually comes from.",
        learn: [
          {
            t: "Scaling",
            d: "Many models assume features sit on similar scales. StandardScaler centres each feature to mean 0 and standard deviation 1.",
            code: `from sklearn.preprocessing import StandardScaler
X_scaled = StandardScaler().fit_transform(X)`,
          },
          {
            t: "Encoding categoricals",
            d: "Models need numbers. One-hot encoding turns categories into 0/1 columns; ordinal encoding maps them to integers when the order is meaningful.",
          },
          {
            t: "Missing values",
            d: "Impute gaps with the mean, median, or most frequent value — or add a 'was missing' flag. Don't silently drop rows unless you have to.",
          },
          {
            t: "Creating features",
            d: "The biggest wins often come from new features: ratios, dates split into day and month, text length, or domain-specific combinations.",
          },
          {
            t: "Avoiding leakage",
            d: "Leakage is letting test or future information sneak into training — for example scaling before the split. It inflates your scores and then breaks in production.",
          },
        ],
      },
    ],
  },
  {
    id: "dl",
    index: "04",
    weeks: "8–10 weeks",
    title: "Deep learning",
    blurb:
      "PyTorch from tensors up. Build small networks by hand before reaching for anything pre-trained.",
    topics: [
      {
        id: "torch",
        name: "PyTorch fundamentals",
        why: "Tensors, autograd, the training loop. Write it yourself once.",
        learn: [
          {
            t: "Tensors",
            d: "A tensor is a NumPy-like array that can live on a GPU and track gradients. It's the basic unit everything in PyTorch is built from.",
            code: `import torch
x = torch.tensor([1.0, 2.0], requires_grad=True)`,
          },
          {
            t: "Autograd",
            d: "PyTorch records the operations you run and computes gradients automatically when you call backward().",
            code: `y = (x ** 2).sum()
y.backward()
x.grad        # the gradients`,
          },
          {
            t: "nn.Module",
            d: "Models subclass nn.Module: define the layers in __init__ and the computation in forward.",
            code: `import torch.nn as nn
class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(10, 1)
    def forward(self, x):
        return self.fc(x)`,
          },
          {
            t: "The training loop",
            d: "Each batch: zero the gradients, run the forward pass, compute the loss, call backward(), then step the optimizer.",
            code: `for x, y in loader:
    optimizer.zero_grad()
    loss = criterion(model(x), y)
    loss.backward()
    optimizer.step()`,
          },
          {
            t: "Optimizers",
            d: "Optimizers turn gradients into weight updates. Adam adapts the step size per parameter and is a solid default.",
            code: `optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)`,
          },
        ],
      },
      {
        id: "cnn",
        name: "Convolutional networks",
        why: "Vision is the cleanest place to learn architecture intuition.",
        learn: [
          {
            t: "Convolution",
            d: "A small filter slides across the image computing dot products, detecting local patterns like edges. The same filter is reused everywhere, so there are far fewer weights than a dense layer.",
          },
          {
            t: "Pooling",
            d: "Pooling (such as max-pooling) shrinks the feature map, keeping the strongest signals and making the network a little tolerant to shifts.",
          },
          {
            t: "Channels & feature maps",
            d: "An image has channels (RGB is three). Each conv layer outputs many feature maps, each one responding to a different learned pattern.",
          },
          {
            t: "Classic architectures",
            d: "Stacks of convolution, activation, and pooling, ending in dense layers. ResNet's skip connections are what let very deep networks train at all.",
          },
          {
            t: "Transfer learning",
            d: "Start from a model pre-trained on millions of images, swap the final layer, and fine-tune on your data. It works remarkably well with very little data.",
          },
        ],
      },
      {
        id: "attn",
        name: "Sequences & attention",
        why: "The bridge from RNNs to the idea behind transformers.",
        learn: [
          {
            t: "Why sequences are hard",
            d: "In text and audio, order matters and important dependencies can sit far apart. A fixed-size window simply isn't enough.",
          },
          {
            t: "RNNs and their limits",
            d: "RNNs process one token at a time, carrying a hidden state forward. They struggle with long-range dependencies and can't be parallelized.",
          },
          {
            t: "Attention",
            d: "Attention lets every position look directly at every other position and weigh what's relevant — with no penalty for distance.",
          },
          {
            t: "Queries, keys, values",
            d: "Each token produces a query, a key, and a value. Attention scores come from query times key (softmaxed), and are used to blend the values into the output.",
          },
          {
            t: "Positional information",
            d: "Because attention ignores order on its own, positional encodings are added to the inputs so the model knows where each token sits.",
          },
        ],
      },
      {
        id: "tricks",
        name: "Training in practice",
        why: "Regularization, schedules, debugging a loss that won't drop.",
        learn: [
          {
            t: "Regularization",
            d: "Dropout randomly zeroes activations during training; weight decay penalizes large weights. Both push the model to generalize instead of memorize.",
          },
          {
            t: "Normalization",
            d: "Batch and layer normalization rescale activations to keep them stable, which lets you train faster and go deeper.",
          },
          {
            t: "Learning-rate schedules",
            d: "Warm the learning rate up, then decay it over training. A good schedule often matters as much as the architecture itself.",
          },
          {
            t: "Overfitting vs underfitting",
            d: "Low train loss but high validation loss means overfitting — regularize or get more data. Both high means underfitting — train longer or use a bigger model.",
          },
          {
            t: "Gradient problems",
            d: "Very deep networks can suffer vanishing or exploding gradients. Normalization, residual connections, and gradient clipping are the usual fixes.",
          },
        ],
      },
    ],
  },
  {
    id: "llm",
    index: "05",
    weeks: "8–10 weeks",
    title: "LLMs & the modern stack",
    blurb:
      "Where the jobs are. Build with models through APIs first, then go deeper into how they work.",
    topics: [
      {
        id: "tf",
        name: "Transformer architecture",
        why: "Self-attention, tokens, context windows — read the diagrams until they're obvious.",
        learn: [
          {
            t: "Tokens",
            d: "Models don't read words or characters — they read tokens, which are sub-word chunks. Tokenization is the step that splits your text into them.",
            code: `"unhappiness" -> ["un", "happiness"]   (illustrative)`,
          },
          {
            t: "Embeddings",
            d: "Each token is mapped to a vector (an embedding) that captures its meaning, so tokens with similar meaning end up close together in that space.",
          },
          {
            t: "Self-attention",
            d: "Each token attends to every other token to build a context-aware representation of itself. This is the core idea of the transformer.",
          },
          {
            t: "Multi-head attention",
            d: "Several attention 'heads' run in parallel, each free to learn a different kind of relationship, and their outputs are combined.",
          },
          {
            t: "Context window",
            d: "The maximum number of tokens a model can consider at once. Your prompt, the chat history, and any retrieved documents all have to fit inside it.",
          },
          {
            t: "Decoder-only models",
            d: "GPT-style models work by predicting the next token over and over, generating text one token at a time.",
          },
        ],
      },
      {
        id: "prompt",
        name: "Prompting & model APIs",
        why: "Structured outputs, tool use, and getting reliable behavior.",
        learn: [
          {
            t: "Prompt structure",
            d: "Be explicit: state the task, the constraints, and give an example. Clear instructions beat clever wording almost every time.",
          },
          {
            t: "System vs user roles",
            d: "The system message sets durable behaviour and rules; user messages carry the actual request. Keep standing instructions in the system role.",
          },
          {
            t: "Structured output",
            d: "Ask for JSON (or use the API's JSON / structured-output mode) so your code can parse the response reliably instead of scraping free text.",
            code: `Return JSON only:
{"sentiment": "positive" | "negative", "score": 0-1}`,
          },
          {
            t: "Tool calling",
            d: "Describe functions the model may call (a name, a description, and a schema for the arguments). The model picks one and returns arguments; your code runs it and feeds the result back.",
          },
          {
            t: "Temperature & sampling",
            d: "Temperature controls randomness — near 0 is focused and repeatable, higher is more creative. Lower it for extraction, raise it for brainstorming.",
          },
        ],
      },
      {
        id: "rag",
        name: "RAG & vector search",
        why: "Embeddings plus retrieval — the default pattern for grounding models in your data.",
        learn: [
          {
            t: "Embeddings",
            d: "Turn each piece of text into a vector so that similar meanings land near each other. This is the foundation of semantic search.",
          },
          {
            t: "Vector databases",
            d: "These store embeddings and find nearest neighbours fast using cosine or dot-product similarity. Common ones are FAISS, pgvector, and Pinecone.",
          },
          {
            t: "Chunking",
            d: "Split documents into passages small enough to embed cleanly but big enough to stay meaningful, with a little overlap so you don't cut a thought in half.",
          },
          {
            t: "Retrieve, then rerank",
            d: "Fetch the top-k most similar chunks, optionally rerank them with a stronger model, then drop the best ones into the prompt.",
          },
          {
            t: "Grounding & citations",
            d: "Put the retrieved text into the prompt and ask the model to answer only from it and cite its sources. This is what cuts down hallucination.",
          },
        ],
      },
      {
        id: "ft",
        name: "Fine-tuning & evals",
        why: "When to tune, when not to, and how to measure if it worked.",
        learn: [
          {
            t: "Tune vs prompt",
            d: "Try prompting and RAG first — they're cheaper and faster. Fine-tune when you need a consistent style or format, or you have plenty of labelled examples.",
          },
          {
            t: "Datasets",
            d: "Collect clean input-to-output pairs in the format the trainer expects. Consistency and quality matter far more than raw quantity.",
          },
          {
            t: "LoRA / PEFT",
            d: "Instead of updating every weight, LoRA trains small adapter matrices. It's cheap, fast, and good enough for the large majority of tasks.",
          },
          {
            t: "Building evals",
            d: "Write a fixed set of test cases with expected behaviour so you can judge changes objectively. This eval set becomes your most valuable asset.",
          },
          {
            t: "Measuring improvement",
            d: "Compare the tuned model against the base model on that eval set. If it isn't clearly better, don't ship it.",
          },
        ],
      },
    ],
  },
  {
    id: "ship",
    index: "06",
    weeks: "ongoing",
    title: "Shipping & MLOps",
    blurb:
      "An engineer is someone whose models run in production. Everything here shows up in interviews.",
    topics: [
      {
        id: "api",
        name: "Serving with FastAPI",
        why: "Wrap a model in an endpoint. The smallest unit of 'deployed'.",
        learn: [
          {
            t: "FastAPI basics",
            d: "FastAPI turns ordinary Python functions into HTTP endpoints, with automatic interactive docs.",
            code: `from fastapi import FastAPI
app = FastAPI()

@app.get("/health")
def health():
    return {"ok": True}`,
          },
          {
            t: "Request models",
            d: "Define the shape of requests and responses with pydantic, and FastAPI validates the incoming data for you.",
            code: `from pydantic import BaseModel
class Query(BaseModel):
    text: str`,
          },
          {
            t: "Load the model once",
            d: "Load the model weights when the app starts up, not on every request, so each call stays fast.",
          },
          {
            t: "Inference endpoint",
            d: "Accept the validated input, run the model, and return JSON.",
            code: `@app.post("/predict")
def predict(q: Query):
    return {"label": model(q.text)}`,
          },
          {
            t: "Async & errors",
            d: "Use async def for I/O-bound work, and raise HTTPException to return clean, well-typed error responses.",
          },
        ],
      },
      {
        id: "docker",
        name: "Docker & cloud basics",
        why: "Reproducible environments, one container at a time.",
        learn: [
          {
            t: "Images vs containers",
            d: "An image is a frozen snapshot of your app plus its environment. A container is a running instance of that image.",
          },
          {
            t: "Dockerfile",
            d: "A recipe for building the image: pick a base, copy your code, install dependencies, and set the start command.",
            code: `FROM python:3.12-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`,
          },
          {
            t: "Build & run",
            d: "Build the image once, then run it anywhere Docker is installed.",
            code: `docker build -t myapp .
docker run -p 8000:8000 myapp`,
          },
          {
            t: "Ports & volumes",
            d: "Map container ports to the host with -p, and mount folders with -v for data that needs to survive a restart.",
          },
          {
            t: "Registry & deploy",
            d: "Push the image to a registry (Docker Hub, ECR, GCR), and any cloud host can then pull and run it.",
          },
        ],
      },
      {
        id: "mon",
        name: "Monitoring & CI/CD",
        why: "Drift, latency, and shipping changes without fear.",
        learn: [
          {
            t: "Logging & metrics",
            d: "Emit structured logs and counters — requests, errors, latency — so you can actually see what production is doing.",
          },
          {
            t: "Latency & throughput",
            d: "Track p50, p95, and p99 latency along with requests per second. Tail latency (p99) is what users actually feel.",
          },
          {
            t: "Drift",
            d: "Data drift is when inputs change over time; model drift is when accuracy decays as a result. Watch input distributions and outcomes, and retrain when they move.",
          },
          {
            t: "Automated tests",
            d: "Unit-test your data transforms and add a small 'does the model still pass these cases' check to catch regressions before users do.",
          },
          {
            t: "CI/CD",
            d: "On every push, automatically run the tests and build the image, and deploy when they're green. Ship small changes often, always with a way to roll back.",
          },
        ],
      },
      {
        id: "agents",
        name: "Agents & tool use",
        why: "Models that take actions — the current frontier of the job.",
        learn: [
          {
            t: "What is an agent",
            d: "An agent is an LLM that decides on actions in a loop to reach a goal, rather than producing a single answer in one shot.",
          },
          {
            t: "The agent loop",
            d: "Plan, act (call a tool), observe the result, and repeat until the goal is met. The model reasons over each new observation before the next step.",
          },
          {
            t: "Tools",
            d: "Give the model functions it can call — web search, code execution, a database query. Each tool has a name, a description, and a schema for its arguments.",
          },
          {
            t: "Memory & context",
            d: "Carry the relevant state across steps and summarize older history so the conversation keeps fitting inside the context window.",
          },
          {
            t: "Guardrails",
            d: "Set limits: a maximum number of steps, an allow-list of tools, validation of each action, and clear stopping conditions so the agent can't loop forever or do harm.",
          },
        ],
      },
    ],
  },
];

export const QUESTIONS = [
  {
    stage: "foundations",
    q: "Which Python structure stores key–value pairs?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: 1,
    note: "Dictionaries map keys to values in O(1) average lookup — you'll use them constantly.",
  },
  {
    stage: "foundations",
    q: "What does `git branch` let you do?",
    options: [
      "Delete the repository",
      "Work on changes in isolation from the main line",
      "Compress file history",
      "Sync with a remote server",
    ],
    answer: 1,
    note: "Branches are cheap pointers — isolate experiments, merge what works.",
  },
  {
    stage: "math",
    q: "A gradient points in the direction of…",
    options: [
      "Steepest increase of a function",
      "The nearest local minimum",
      "The mean of the data",
      "The largest eigenvalue",
    ],
    answer: 0,
    note: "Training steps go the opposite way — downhill. That's gradient descent.",
  },
  {
    stage: "math",
    q: "Multiplying a 3×4 matrix by a 4×2 matrix gives a matrix of shape…",
    options: ["4×4", "3×2", "2×3", "It's undefined"],
    answer: 1,
    note: "Inner dimensions must match; outer dimensions survive. Shape errors are half of deep learning debugging.",
  },
  {
    stage: "ml",
    q: "A model scores 99% on training data and 62% on new data. This is…",
    options: ["Underfitting", "Overfitting", "Data leakage", "Label noise"],
    answer: 1,
    note: "It memorized the training set. Regularize, simplify, or get more data.",
  },
  {
    stage: "ml",
    q: "For a fraud dataset where 1 in 500 rows is fraud, the most honest metric is…",
    options: ["Accuracy", "Precision & recall", "Mean squared error", "R²"],
    answer: 1,
    note: "Predicting 'never fraud' is 99.8% accurate and completely useless — accuracy hides class imbalance.",
  },
  {
    stage: "dl",
    q: "Backpropagation is the algorithm that…",
    options: [
      "Initializes the weights",
      "Computes gradients of the loss with respect to every weight",
      "Selects the best architecture",
      "Normalizes the input data",
    ],
    answer: 1,
    note: "It's the chain rule applied backwards through the network — then the optimizer uses those gradients.",
  },
  {
    stage: "dl",
    q: "Convolutional layers are effective on images because they…",
    options: [
      "Use more parameters than dense layers",
      "Exploit local patterns and reuse weights across positions",
      "Require no training",
      "Only work in grayscale",
    ],
    answer: 1,
    note: "A small filter slides across the image — same edge detector everywhere, far fewer parameters.",
  },
  {
    stage: "llm",
    q: "The core mechanism inside a transformer is…",
    options: ["Convolution", "Recurrence", "Self-attention", "Pooling"],
    answer: 2,
    note: "Every token looks at every other token and decides what's relevant. That's the whole headline.",
  },
  {
    stage: "llm",
    q: "RAG improves an LLM's answers by…",
    options: [
      "Increasing the temperature",
      "Retrieving relevant documents and adding them to the prompt",
      "Making the model larger",
      "Removing the tokenizer",
    ],
    answer: 1,
    note: "Retrieval-augmented generation grounds the model in your data instead of relying on its memory.",
  },
  {
    stage: "llm",
    q: "A vector database is primarily used to…",
    options: [
      "Run SQL joins faster",
      "Search by semantic similarity using embeddings",
      "Store model weights",
      "Cache API keys",
    ],
    answer: 1,
    note: "Text becomes vectors; nearby vectors mean similar meaning. That's how retrieval finds relevant chunks.",
  },
  {
    stage: "ship",
    q: "Docker solves which problem?",
    options: [
      "Writing better prompts",
      "'It works on my machine' — packaging code with its exact environment",
      "Labeling training data",
      "Choosing hyperparameters",
    ],
    answer: 1,
    note: "A container carries the OS layer, dependencies, and your code as one reproducible unit.",
  },
];

QUESTIONS.forEach((q) => {
  q.id = q.q.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 48);
});

export const LEVELS = [
  { at: 0, name: "Novice" },
  { at: 90, name: "Apprentice" },
  { at: 220, name: "Practitioner" },
  { at: 400, name: "Builder" },
  { at: 620, name: "AI engineer" },
];

export const TOPIC_XP = 15;
export const QUESTION_XP = 10;
export const STREAK_BONUS = 5;
export const TOTAL_TOPICS = STAGES.reduce((n, s) => n + s.topics.length, 0);

// Every topic key in the order it must be learned. A topic only unlocks once the
// one before it is complete, so this single ordered list defines the prerequisites.
export const TOPIC_KEYS = STAGES.flatMap((s) => s.topics.map((t) => `${s.id}.${t.id}`));
