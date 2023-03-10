<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index()
    {
        $items = Comment::all();
        return response()->json([
        'data' => $items
        ], 200);
    }
    public function store(Request $request)
    {
        $item = Comment::create($request->all());
        return response()->json([
        'data' => $item
        ], 201);
    }
    public function show(Comment $comment)
    {
        $item = Comment::find($post);
        if($item) {
            return response()->json([
                'data' => $item
            ],200);
        } else {
            return response()->json([
                'massage' => 'Not found'
            ],404);
        }
    }
    public function destroy(Comment $comment)
    {
        $item = Comment::where('id', $post->id)->delete();
        if ($item) {
            return response()->json([
            'message' => 'Deleted successfully',
            ], 200);
        } else {
            return response()->json([
            'message' => 'Not found',
            ], 404);
        }
    }
}
